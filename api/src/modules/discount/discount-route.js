const {
  postDiscount,
  putDiscount,
  getDiscount,
  getAllDiscount,
  deleteDiscount,
} = require("./discount-controller");

async function discountRoute(fastify) {
  fastify.post("/", postDiscount);
  fastify.get("/", getAllDiscount);
  fastify.get("/:id", getDiscount);
  fastify.delete("/:id", deleteDiscount);
}

module.exports = discountRoute;
