const product = {
  // 查询单个商品信息（通过 id 查询）
  queryProductById(option) {
    if (!option || !option.id) {
      throw new Error("Option must include a valid 'id' property.");
    }
    return "SELECT * FROM products WHERE id = ?"; // 使用参数化查询
  },
  // 根据分类id查询商品
  queryProductByCategoryId(option) {
    if (!option || !option.id) {
      throw new Error("Option must include a valid 'id' property.");
    }
    return "SELECT * FROM products WHERE category_id = ?"; // 使用参数化查询
  },
};
module.exports = product;
