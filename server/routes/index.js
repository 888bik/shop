// server/routes/index.js
var express = require("express");
var router = express.Router();
var db = require("../db/sql.js"); // 修改为导入 sql.js 中的 query 方法
var user = require("../db/userSql.js");
let product = require("../db/productSql.js")
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

    // 参数化查询防止 SQL 注入
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

module.exports = router;
