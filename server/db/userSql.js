// server/db/userSql.js
const sql = require('./sql.js'); // 确保路径正确
const jwt = require("jsonwebtoken");

const user = {
    // 查询用户名
    queryUserName(option) {
        if (!option || !option.userName) {
            throw new Error("Option must include a valid 'userName' property.");
        }
        return "select * from user where userName = ?"; // 使用参数化查询
    },

    // 查询密码
    queryUserPwd(option) {
        if (!option || !option.userName || !option.password) {
            throw new Error("Option must include valid 'userName' and 'password' properties.");
        }
        return "select * from user where userName = ? and password = ?"; // 使用参数化查询
    },

    // 新增用户
    insertData(option) {
        let { userName, password } = option;
        if (!userName || !password) {
            throw new Error("Option must include valid 'userName' and 'password' properties.");
        }

        const secret = "secret";
        const token = jwt.sign({ userName }, secret);

        return new Promise((resolve, reject) => {
            sql.query(
                "INSERT INTO user (userName, password, token) VALUES (?, ?, ?)",
                [userName, password, token],
                (error, results) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(results);
                }
            );
        });
    }
};

module.exports = user;