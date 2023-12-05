const User = require("./user-model");
const bcrypt = require("bcryptjs");

const { bodySchema, querySchema } = require("./user-schema");
const { paramsSchema } = require("../../services/validations/schemas");
const {
  bodyValidation,
  paramsValidation,
  queryValidation,
} = require("../../services/validations/validations");
const { globalService } = require("../../services/functions/functions");
const { loginElement } = require("./user-service");
const { customError } = require("../../services/errors/custom-error");
const { customResponse } = require("../../services/errors/custom-response");
const { catchedAsync } = require("../../services/errors/catched-async");

const postUser = async (req, reply) => {
  const { body } = req;

  const bodyValidate = bodyValidation(bodySchema, req);
  if (bodyValidate) return customError(reply, 404, `${bodyValidate}`);

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await globalService.createElement(
    { ...body, password: hashedPassword },
    User
  );
  if (!newUser) return customError(reply, 409, "User not created");

  customResponse(reply, 200, { message: "User created", newUser });
};

const loginUser = async (req, reply) => {
  const { password } = req.body;
  const { query } = req;

  const queryValidate = queryValidation(querySchema, req);
  if (queryValidate) return customError(reply, 404, `${queryValidate}`);

  const findUser = await globalService.findAllElement(User, query);
  if (!findUser.length) return customError(reply, 404, "Users not found");

  const tryLogin = await loginElement(password, findUser);
  if (!tryLogin) return customError(reply, 404, "Password not match");

  const logged = {
    name: findUser[0].name,
    phone: findUser[0].phone,
    is_deleted: findUser[0].is_deleted,
    token: tryLogin,
  };

  customResponse(reply, 200, logged);
};

const putUser = async (req, reply) => {
  const { body } = req;
  const { id } = req.params;

  const bodyValidate = bodyValidation(bodySchema, req);
  if (bodyValidate) return customError(reply, 404, `${bodyValidate}`);

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const findUser = await globalService.findElement(id, User);
  if (!findUser) return customError(reply, 404, "User not found");

  const user = await globalService.updateElement(id, body, User);
  if (!user) return customError(reply, 409, "User not updated");

  return customResponse(reply, 200, { message: "User updated", user });
};

const getAllUser = async (req, reply) => {
  const { query } = req;

  const queryValidate = queryValidation(querySchema, req);
  if (queryValidate) return customError(reply, 409, `${queryValidate}`);

  const users = await globalService.findAllElement(User, query);
  if (!users.length) return customError(reply, 404, "Users not found");

  customResponse(reply, 200, { message: "Users finded", users });
};

const getUser = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const user = await globalService.findElement(id, User);
  if (!user) return customError(reply, 404, "User not found");

  return customResponse(reply, 200, { message: "User finded", user });
};

const deleteUser = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const findUser = await globalService.findElement(id, User);
  if (!findUser) return customError(reply, 404, "User not found");

  const user = await globalService.deleteElement(id, User);
  if (!user) return customError(reply, 409, "User not deleted");

  return customResponse(reply, 200, { message: "User deleted", user });
};

module.exports = {
  postUser: catchedAsync(postUser),
  loginUser: catchedAsync(loginUser),
  putUser: catchedAsync(putUser),
  getAllUser: catchedAsync(getAllUser),
  getUser: catchedAsync(getUser),
  deleteUser: catchedAsync(deleteUser),
};
