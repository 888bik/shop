const cart = {
  // 根据用户 ID 查询购物车数据
  queryCartByUserId(option) {
    if (!option || !option.userId) {
      throw new Error("Option must include a valid 'userId' property.");
    }
    // 查询 product_cart 表中指定用户的购物车数据
    return `SELECT * FROM products_cart WHERE userId = ?`;
  },
};

module.exports = cart;
