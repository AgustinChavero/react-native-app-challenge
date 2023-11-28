const {
  postProduct,
  putProduct,
  getProduct,
  getAllProduct,
  deleteProduct,
} = require("./product-controller");

async function productRoute(fastify) {
  fastify.post("/api/product", postProduct);
  fastify.put("/api/product/:id", putProduct);
  fastify.get("/api/product", getAllProduct);
  fastify.get("/api/product/:id", getProduct);
  fastify.delete("/api/product/:id", deleteProduct);
}

module.exports = productRoute;
