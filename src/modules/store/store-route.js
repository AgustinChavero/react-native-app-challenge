const {
  postStore,
  putStore,
  getStore,
  getAllStore,
  deleteStore,
} = require("./store-controller");

async function storeRoute(fastify) {
  fastify.post("/", postStore);
  fastify.put("/:id", putStore);
  fastify.get("/", getAllStore);
  fastify.get("/:id", getStore);
  fastify.delete("/:id", deleteStore);
}

module.exports = storeRoute;
