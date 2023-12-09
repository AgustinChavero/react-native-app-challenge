const {
  postUser,
  loginUser,
  putUser,
  getUser,
  getAllUser,
  deleteUser,
} = require("./user-controller");

async function userRoute(fastify) {
  fastify.post("/:id", postUser);
  fastify.post("/login", loginUser);
  fastify.put("/:id", putUser);
  fastify.get("/", getAllUser);
  fastify.get("/:id", getUser);
  fastify.delete("/:id", deleteUser);
}

module.exports = userRoute;
