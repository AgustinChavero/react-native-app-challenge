const {
  postProduct,
  putProduct,
  getProduct,
  getAllProduct,
  deleteProduct,
} = require("./product-controller");

async function productRoute(fastify) {
  fastify.post("/product", postProduct);
  fastify.put("/product/:id", putProduct);
  fastify.get("/product", getAllProduct);
  fastify.get("/product/:id", getProduct);
  fastify.delete("/product/:id", deleteProduct);
}

module.exports = productRoute;
