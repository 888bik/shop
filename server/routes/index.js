var express = require("express");
var router = express.Router();
var db = require("../db/sql.js"); // 导入 sql.js 中的 query 方法
var user = require("../db/userSql.js");
const product = require("../db/productSql.js");
const jwt = require("jsonwebtoken");
const cart = require("../db/cartSql.js");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 登陆
router.post("/api/login", async function (req, res, next) {
  try {
    // 验证输入
    if (!req.body.userName || !req.body.password) {
      return res.status(400).send({
        code: 400,
        data: {
          msg: "用户名和密码不能为空",
          success: false,
        },
      });
    }

    let params = {
      userName: req.body.userName,
      password: req.body.password,
    };

    const queryUser = user.queryUserName(params);

    // 使用 await 等待查询结果
    const [result] = await db.query(queryUser, [params.userName]);

    if (result.length === 0) {
      return res.send({
        code: 300,
        data: {
          msg: "用户不存在",
          success: false,
        },
      });
    }

    const userResult = result[0];

    // 验证密码
    if (params.password === userResult.password) {
      return res.send({
        code: 200,
        data: {
          msg: "登陆成功",
          success: true,
          data: userResult,
        },
      });
    } else {
      return res.send({
        code: 300,
        data: {
          msg: "密码错误",
          success: false,
        },
      });
    }
  } catch (error) {
    console.error("Login failed:", error);
    return res.status(500).send({
      code: 500,
      data: {
        msg: "服务器错误",
        success: false,
      },
    });
  }
});

// 查询单个商品API
router.get("/api/products/:id", async function (req, res, next) {
  try {
    const { id } = req.params; // 获取商品的 id
    const sql = product.queryProductById({ id }); // 查询单个商品的 SQL 语句
    const [result] = await db.query(sql, [id]);
    if (result.length === 0) {
      return res.status(404).json({
        code: 404,
        msg: "商品未找到",
        success: false,
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "商品信息查询成功",
      success: true,
      data: result, // 返回找到的商品
    });
  } catch (error) {
    console.error("查询商品失败:", error);
    return res.status(500).json({
      code: 500,
      msg: "服务器错误",
      success: false,
    });
  }
});

// 查询根据分类ID获取商品
router.get("/api/products/category/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // 查询数据库获取该分类下的商品
    const sql = product.queryProductByCategoryId({ id: id });
    const [results] = await db.query(sql, [id]);
    if (results.length > 0) {
      res.send({
        success: true,
        products: results,
      });
    } else {
      res.send({
        success: false,
        msg: "没有找到该分类下的商品",
      });
    }
  } catch (error) {
    console.error("查询商品失败:", error);
    res.status(500).send({
      success: false,
      msg: "服务器错误",
    });
  }
});

// 添加购物车
router.post("/api/addCart", async (req, res, next) => {
  try {
    const { id } = req.body; // 获取商品的 id
    let token = req.headers.token;
    let tokenObj = jwt.decode(token);
    console.log(tokenObj);
    // 使用参数化查询防止SQL注入
    const [userResult] = await db.query('SELECT * FROM user WHERE userName = ?', [tokenObj.userName]);
    if (userResult.length === 0) {
      return res.status(400).send({
        code: 400,
        data: {
          msg: "用户不存在",
          success: false,
        },
      });
    }
    let userId = userResult[0].id;

    const [productResult] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    if (productResult.length === 0) {
      return res.status(404).send({
        code: 404,
        data: {
          msg: "商品未找到",
          success: false,
        },
      });
    }
    let productName = productResult[0].title;
    let productPrice = productResult[0].price;
    let productImgUrl = productResult[0].image_url;

    await db.queryUser(
      "INSERT INTO products_cart (userId, productName, productPrice, productImgUrl) VALUES (?, ?, ?, ?)",
      [userId, productName, productPrice, productImgUrl]
    );
    await db.query('INSERT INTO products_cart (userId, productName, productPrice, productImgUrl) VALUES (?, ?, ?, ?)', [
      userId, productName, productPrice, productImgUrl
    ]);

    return res.send({
      data: {
        code: 200,
        msg: "添加购物车成功",
        success: true,
      },
    });
  } catch (error) {
    console.error("添加购物车失败:", error);
    return res.status(500).send({
      code: 500,
      data: {
        msg: "服务器错误",
        success: false,
      },
    });
  }
});
// 根据用户 ID 查询购物车数据
router.get("/api/cart/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res
      .status(400)
      .json({ success: false, message: "缺少用户 ID 参数" });
  }

  try {
    // 使用数据库查询用户购物车数据
    const sql = cart.queryCartByUserId({ userId });
    console.log(sql);
    const [results] = await db.queryCart(sql, [userId]); // 参数化查询，防止 SQL 注入
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error("查询购物车数据失败:", error);
    res.status(500).json({ success: false, message: "服务器错误" });
  }
});

// 注册
router.post("/api/register", async (req, res, next) => {
  try {
    // 验证输入
    if (!req.body.userName || !req.body.password) {
      return res.status(400).send({
        code: 400,
        data: {
          msg: "用户名和密码不能为空",
          success: false,
        },
      });
    }

    let params = {
      userName: req.body.userName,
      password: req.body.password,
    };

    // 检查用户是否已存在
    const queryUser = user.queryUserName(params);
    const [userResult] = await db.query(queryUser, [params.userName]);
    if (userResult.length > 0) {
      console.log("用户已存在:", params.userName); // 添加日志
      return res.status(400).send({
        code: 400,
        data: {
          msg: "用户已存在",
          success: false,
        },
      });
    }

    // 插入新用户
    await user.insertData(params); // 直接调用 insertData 方法

    return res.send({
      code: 200,
      data: {
        msg: "注册成功",
        success: true,
        data: params,
      },
    });
  } catch (error) {
    console.error("Register failed:", error);
    return res.status(500).send({
      code: 500,
      data: {
        msg: "服务器错误",
        success: false,
      },
    });
  }
});

module.exports = router;
