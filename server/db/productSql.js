const product = {
    // 查询单个商品信息（通过 id 查询）
    queryProductById(option) {
        if (!option || !option.id) {
            throw new Error("Option must include a valid 'id' property.");
        }
        return "SELECT * FROM products WHERE id = ?"; // 使用参数化查询
    },

    // 查询商品列表（通过 name 或 category 查询）
    queryProductsByNameOrCategory(option) {
        let sql = "SELECT * FROM products WHERE 1=1"; // 默认条件
        const params = [];

        if (option.name) {
            sql += " AND name LIKE ?";
            params.push(`%${option.name}%`); // 模糊查询商品名
        }

        if (option.category) {
            sql += " AND category = ?";
            params.push(option.category); // 精确查询商品类别
        }

        return { sql, params };
    }
};
module.exports = product;