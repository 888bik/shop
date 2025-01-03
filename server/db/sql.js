// db/sql.js
const mysql = require("mysql2/promise"); // 使用 promise 版本

// 创建数据库连接池
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "vueshop",
});

// 导出一个对象，包含 pool 和查询方法
module.exports = {
  pool,

  // 执行查询的函数
  async query(sql, params = []) {
    console.log("666666666666666666666666");
    try {
      console.log("Executing query:", sql, "with params:", params); // 日志记录查询
      const [rows] = await pool.execute(sql, params); // 执行查询
      return [rows]; // 返回查询结果
    } catch (error) {
      console.error("Query error:", error); // 错误日志
      throw error; // 抛出错误，供调用者处理
    }
  },
  async queryCart(sql, params) {
    console.log("Executing query:", sql, "with params:", params); // 添加日志
    const [rows] = await pool.execute(sql, params);
    return pool.execute(sql, params).catch((error) => {
      console.error("Query error:", error); // 添加日志
      throw error;
    });
  },
  // 查询一个值
  async queryOne(sql, params = []) {
    try {
      const [rows] = await pool.execute(sql, params);

      if (rows.length > 0) {
        return rows[0]; // 如果结果集不为空，返回第一条数据
      }

      return null; // 如果没有结果，返回 null
    } catch (error) {
      console.error("QueryOne error:", error);
      throw error;
    }
  },

  // 插入数据，返回插入的 ID
  async insert(sql, params = []) {
    try {
      const [result] = await pool.execute(sql, params);
      return {
        success: true,
        message: "新增用户成功",
        affectedRows: result.affectedRows,
      };
    } catch (error) {
      console.error("Insert error:", error);
      throw error;
    }
  },

  // 更新数据，返回受影响的行数
  async update(sql, params = []) {
    try {
      const [result] = await pool.execute(sql, params);
      return result.affectedRows; // 返回受影响的行数
    } catch (error) {
      console.error("Update error:", error);
      throw error;
    }
  },

  // 删除数据，返回受影响的行数
  async delete(sql, params = []) {
    try {
      const [result] = await pool.execute(sql, params);
      return result.affectedRows; // 返回受影响的行数
    } catch (error) {
      console.error("Delete error:", error);
      throw error;
    }
  },
};
