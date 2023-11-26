const {
  postStore,
  putStore,
  getStore,
  getAllStore,
  deleteStore,
} = require("./store-controller");

async function storeRoute(fastify) {
  fastify.post("/store", postStore);
  fastify.put("/store/:id", putStore);
  fastify.get("/store", getAllStore);
  fastify.get("/store/:id", getStore);
  fastify.delete("/store/:id", deleteStore);
}

module.exports = storeRoute;
