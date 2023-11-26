const Store = require("./store-model");

const { bodySchema, querySchema } = require("./store-schema");
const { paramsSchema } = require("../../services/validations/schemas");
const {
  bodyValidation,
  paramsValidation,
  queryValidation,
} = require("../../services/validations/validations");
const { globalService } = require("../../services/functions/functions");
const { customError } = require("../../services/errors/custom-error");
const { customResponse } = require("../../services/errors/custom-response");
const { catchedAsync } = require("../../services/errors/catched-async");

const postStore = async (req, reply) => {
  const { body } = req;

  const bodyValidate = bodyValidation(bodySchema, req);
  if (bodyValidate) return customError(reply, 404, `${bodyValidate}`);

  const newStore = await globalService.createElement(body, Store);
  if (!newStore) return customError(reply, 409, "Store not created");

  customResponse(reply, 200, { message: "Store created", newStore });
};

const putStore = async (req, reply) => {
  const { body } = req;
  const { id } = req.params;

  const bodyValidate = bodyValidation(bodySchema, req);
  if (bodyValidate) return customError(reply, 404, `${bodyValidate}`);

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const findStore = await globalService.findElement(id, Store);
  if (!findStore) return customError(reply, 404, "Store not found");

  const store = await globalService.updateElement(id, body, Store);
  if (!store) return customError(reply, 409, "Store not updated");

  return customResponse(reply, 200, { message: "Store updated", store });
};

const getAllStore = async (req, reply) => {
  const { query } = req;

  const queryValidate = queryValidation(querySchema, req);
  if (queryValidate) return customError(reply, 409, `${queryValidate}`);

  const stores = await globalService.findAllElement(Store, query);
  if (!stores.length) return customError(reply, 404, "Stores not found");

  customResponse(reply, 200, { message: "Stores finded", stores });
};

const getStore = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const store = await globalService.findElement(id, Store);
  if (!store) return customError(reply, 404, "Store not found");

  return customResponse(reply, 200, { message: "Store finded", store });
};

const deleteStore = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const findStore = await globalService.findElement(id, Store);
  if (!findStore) return customError(reply, 404, "Store not found");

  const store = await globalService.deleteElement(id, Store);
  if (!store) return customError(reply, 409, "Store not deleted");

  return customResponse(reply, 200, { message: "Store deleted", store });
};

module.exports = {
  postStore: catchedAsync(postStore),
  putStore: catchedAsync(putStore),
  getAllStore: catchedAsync(getAllStore),
  getStore: catchedAsync(getStore),
  deleteStore: catchedAsync(deleteStore),
};
