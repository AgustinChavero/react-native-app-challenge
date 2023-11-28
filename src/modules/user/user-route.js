const {
  postUser,
  loginUser,
  putUser,
  getUser,
  getAllUser,
  deleteUser,
} = require("./user-controller");

async function userRoute(fastify) {
  fastify.post("/api/user", postUser);
  fastify.post("/api/user/:id", loginUser);
  fastify.put("/api/user/:id", putUser);
  fastify.get("/api/user", getAllUser);
  fastify.get("/api/user/:id", getUser);
  fastify.delete("/api/user/:id", deleteUser);
}

module.exports = userRoute;
