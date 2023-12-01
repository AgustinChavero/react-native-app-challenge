const Discount = require("./discount-model");

const { bodySchema, querySchema } = require("./discount-schema");
const { paramsSchema } = require("../../services/validations/schemas");
const {
  bodyValidation,
  paramsValidation,
  queryValidation,
} = require("../../services/validations/validations");
const { globalService } = require("../../services/functions/functions");
const { createDiscount } = require("./discount-service");
const { customError } = require("../../services/errors/custom-error");
const { customResponse } = require("../../services/errors/custom-response");
const { catchedAsync } = require("../../services/errors/catched-async");

const postDiscount = async (req, reply) => {
  const { body } = req;

  const bodyValidate = bodyValidation(bodySchema, req);
  if (bodyValidate) return customError(reply, 404, `${bodyValidate}`);

  const newDiscount = await createDiscount(body, Discount);
  if (!newDiscount) return customError(reply, 409, "Discount not created");

  customResponse(reply, 200, { message: "Discount created", newDiscount });
};

const getAllDiscount = async (req, reply) => {
  const { query } = req;

  const queryValidate = queryValidation(querySchema, req);
  if (queryValidate) return customError(reply, 409, `${queryValidate}`);

  const discounts = await globalService.findAllElement(Discount, query);
  if (!discounts.length) return customError(reply, 404, "Discounts not found");

  customResponse(reply, 200, { message: "Discounts finded", discounts });
};

const getDiscount = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const discount = await globalService.findElement(id, Discount);
  if (!discount) return customError(reply, 404, "Discount not found");

  return customResponse(reply, 200, { message: "Discount finded", discount });
};

const deleteDiscount = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const findDiscount = await globalService.findElement(id, Discount);
  if (!findDiscount) return customError(reply, 404, "Discount not found");

  const discount = await globalService.deleteElement(id, Discount);
  if (!discount) return customError(reply, 409, "Discount not deleted");

  return customResponse(reply, 200, { message: "Discount deleted", discount });
};

module.exports = {
  postDiscount: catchedAsync(postDiscount),
  getAllDiscount: catchedAsync(getAllDiscount),
  getDiscount: catchedAsync(getDiscount),
  deleteDiscount: catchedAsync(deleteDiscount),
};
