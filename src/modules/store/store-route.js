const {
  postStore,
  putStore,
  getStore,
  getAllStore,
  deleteStore,
} = require("./store-controller");

async function storeRoute(fastify) {
  fastify.post("/api/store", postStore);
  fastify.put("/api/store/:id", putStore);
  fastify.get("/api/store", getAllStore);
  fastify.get("/api/store/:id", getStore);
  fastify.delete("/api/store/:id", deleteStore);
}

module.exports = storeRoute;
