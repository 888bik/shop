// db/sql.js
const mysql = require('mysql2/promise'); // 使用 promise 版本

// 创建数据库连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'vueshop'
});

// 导出一个函数来执行查询
module.exports = {
  query(sql, params) {
    console.log('Executing query:', sql, 'with params:', params); // 添加日志
    return pool.execute(sql, params).catch(error => {
      console.error('Query error:', error); // 添加日志
      throw error;
    });
  }
};