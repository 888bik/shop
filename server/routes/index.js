// server/routes/index.js
var express = require('express');
var router = express.Router();
var db = require('../db/sql.js'); // 导入 sql.js 中的 query 方法
var user = require('../db/userSql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 登陆
router.post('/api/login', async function(req, res, next) {
  try {
    // 验证输入
    if (!req.body.userName || !req.body.password) {
      return res.status(400).send({
        code: 400,
        data: {
          msg: '用户名和密码不能为空',
          success: false
        }
      });
    }

    let params = {
      userName: req.body.userName,
      password: req.body.password
    };

    // 参数化查询防止 SQL 注入
    const queryUser = user.queryUserName(params);
    
    // 使用 await 等待查询结果
    const [result] = await db.query(queryUser, [params.userName]);

    if (result.length === 0) {
      return res.send({
        code: 300,
        data: {
          msg: '用户不存在',
          success: false
        }
      });
    }

    const userResult = result[0];

    // 验证密码
    if (params.password === userResult.password) {
      return res.send({
        code: 200,
        data: {
          msg: '登陆成功',
          success: true,
          data: userResult
        }
      });
    } else {
      return res.send({
        code: 300,
        data: {
          msg: '密码错误',
          success: false
        }
      });
    }
  } catch (error) {
    console.error('Login failed:', error);
    return res.status(500).send({
      code: 500,
      data: {
        msg: '服务器错误',
        success: false
      }
    });
  }
});

// 注册
router.post('/api/register', async (req, res, next) => {
  try {
    // 验证输入
    if (!req.body.userName || !req.body.password) {
      return res.status(400).send({
        code: 400,
        data: {
          msg: '用户名和密码不能为空',
          success: false
        }
      });
    }

    let params = {
      userName: req.body.userName,
      password: req.body.password
    };

    // 检查用户是否已存在
    const queryUser = user.queryUserName(params);
    const [userResult] = await db.query(queryUser, [params.userName]);

    if (userResult.length > 0) {
      console.log('用户已存在:', params.userName); // 添加日志
      return res.status(400).send({
        code: 400,
        data: {
          msg: '用户已存在',
          success: false
        }
      });
    }

    // 插入新用户
    await user.insertData(params); // 直接调用 insertData 方法

    return res.send({
      code: 200,
      data: {
        msg: '注册成功',
        success: true
      }
    });
  } catch (error) {
    console.error('Register failed:', error);
    return res.status(500).send({
      code: 500,
      data: {
        msg: '服务器错误',
        success: false
      }
    });
  }
});

module.exports = router;