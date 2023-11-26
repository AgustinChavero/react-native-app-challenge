const {
  postUser,
  loginUser,
  putUser,
  getUser,
  getAllUser,
  deleteUser,
} = require("./user-controller");

async function userRoute(fastify) {
  fastify.post("/user", postUser);
  fastify.post("/user/:id", loginUser);
  fastify.put("/user/:id", putUser);
  fastify.get("/user", getAllUser);
  fastify.get("/user/:id", getUser);
  fastify.delete("/user/:id", deleteUser);
}

module.exports = userRoute;
