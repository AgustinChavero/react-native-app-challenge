const {
  postDiscount,
  putDiscount,
  getDiscount,
  getAllDiscount,
  deleteDiscount,
} = require("./discount-controller");

async function discountRoute(fastify) {
  fastify.post("/discount", postDiscount);
  fastify.get("/discount", getAllDiscount);
  fastify.get("/discount/:id", getDiscount);
  fastify.delete("/discount/:id", deleteDiscount);
}

module.exports = discountRoute;
