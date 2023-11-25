const Product = require("./product-model");

const { bodySchema, querySchema } = require("./product-schema");
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

const postProduct = async (req, reply) => {
  const { body } = req;

  const bodyValidate = bodyValidation(bodySchema, req);
  if (bodyValidate) return customError(reply, 404, `${bodyValidate}`);

  const newProduct = await globalService.createElement(body, Product);
  if (!newProduct) return customError(reply, 409, "Product not created");

  customResponse(reply, 200, { message: "Product created", newProduct });
};

const putProduct = async (req, reply) => {
  const { body } = req;
  const { id } = req.params;

  const bodyValidate = bodyValidation(bodySchema, req);
  if (bodyValidate) return customError(reply, 404, `${bodyValidate}`);

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const findProduct = await globalService.findElement(id, Product);
  if (!findProduct) return customError(reply, 404, "Product not found");

  const product = await globalService.updateElement(id, body, Product);
  if (!product) return customError(reply, 409, "Product not updated");

  return customResponse(reply, 200, { message: "Product updated", product });
};

const getAllProduct = async (req, reply) => {
  const { query } = req;

  const queryValidate = queryValidation(querySchema, req);
  if (queryValidate) return customError(reply, 409, `${queryValidate}`);

  const products = await globalService.findAllElement(Product, query);
  if (!products.length) return customError(reply, 404, "Products not found");

  customResponse(reply, 200, { message: "Products finded", products });
};

const getProduct = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const product = await globalService.findElement(id, Product);
  if (!product) return customError(reply, 404, "Product not found");

  return customResponse(reply, 200, { message: "Product finded", product });
};

const deleteProduct = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const findProduct = await globalService.findElement(id, Product);
  if (!findProduct) return customError(reply, 404, "Product not found");

  const product = await globalService.deleteElement(id, Product);
  if (!product) return customError(reply, 409, "Product not deleted");

  return customResponse(reply, 200, { message: "Product deleted", product });
};

module.exports = {
  postProduct: catchedAsync(postProduct),
  putProduct: catchedAsync(putProduct),
  getAllProduct: catchedAsync(getAllProduct),
  getProduct: catchedAsync(getProduct),
  deleteProduct: catchedAsync(deleteProduct),
};
