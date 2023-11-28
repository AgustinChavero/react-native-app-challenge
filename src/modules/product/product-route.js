const {
  postProduct,
  putProduct,
  getProduct,
  getAllProduct,
  deleteProduct,
} = require("./product-controller");

async function productRoute(fastify) {
  fastify.post("/", postProduct);
  fastify.put("/:id", putProduct);
  fastify.get("/", getAllProduct);
  fastify.get("/:id", getProduct);
  fastify.delete("/:id", deleteProduct);
}

module.exports = productRoute;
