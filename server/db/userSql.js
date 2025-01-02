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
        if (!option || !option.userName || !option.password) {
            throw new Error("Option must include valid 'userName' and 'password' properties.");
        }
        return "insert into user (userName, password) values (?, ?)"; // 使用参数化查询
    }
};

// 使用标准的模块导出方式
module.exports = user;