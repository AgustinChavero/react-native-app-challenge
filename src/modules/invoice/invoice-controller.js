const Invoice = require("./invoice-model");

const { bodySchema, querySchema } = require("./invoice-schema");
const { paramsSchema } = require("../../services/validations/schemas");
const {
  bodyValidation,
  paramsValidation,
  queryValidation,
} = require("../../services/validations/validations");
const { globalService } = require("../../services/functions/functions");
const { createInvoice } = require("./invoice-service");
const { customError } = require("../../services/errors/custom-error");
const { customResponse } = require("../../services/errors/custom-response");
const { catchedAsync } = require("../../services/errors/catched-async");

const postInvoice = async (req, reply) => {
  const { body } = req;

  const bodyValidate = bodyValidation(bodySchema, req);
  if (bodyValidate) return customError(reply, 404, `${bodyValidate}`);

  const newInvoice = await createInvoice(body, Invoice);
  if (!newInvoice) return customError(reply, 409, "Invoice not created");

  customResponse(reply, 200, { message: "Invoice created", newInvoice });
};

const getAllInvoice = async (req, reply) => {
  const { query } = req;

  const queryValidate = queryValidation(querySchema, req);
  if (queryValidate) return customError(reply, 409, `${queryValidate}`);

  const invoices = await globalService.findAllElement(Invoice, query);
  if (!invoices.length) return customError(reply, 404, "Invoices not found");

  customResponse(reply, 200, { message: "Invoices finded", invoices });
};

const getInvoice = async (req, reply) => {
  const { id } = req.params;

  const paramsValidate = paramsValidation(paramsSchema, req);
  if (paramsValidate) return customError(reply, 404, `${paramsValidate}`);

  const invoice = await globalService.findElement(id, Invoice);
  if (!invoice) return customError(reply, 404, "Invoice not found");

  return customResponse(reply, 200, { message: "Invoice finded", invoice });
};

module.exports = {
  postInvoice: catchedAsync(postInvoice),
  getAllInvoice: catchedAsync(getAllInvoice),
  getInvoice: catchedAsync(getInvoice),
};
