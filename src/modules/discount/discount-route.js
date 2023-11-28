const {
  postDiscount,
  putDiscount,
  getDiscount,
  getAllDiscount,
  deleteDiscount,
} = require("./discount-controller");

async function discountRoute(fastify) {
  fastify.post("/api/discount", postDiscount);
  fastify.get("/api/discount", getAllDiscount);
  fastify.get("/api/discount/:id", getDiscount);
  fastify.delete("/api/discount/:id", deleteDiscount);
}

module.exports = discountRoute;
