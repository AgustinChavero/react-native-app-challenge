const Joi = require("joi");

const bodySchema = Joi.object({
  store_id: Joi.string().trim().required().messages({
    "string.base": "The store_id must be a string",
    "string.empty": "The store_id cannot be empty",
    "string.required": "The store_id is required",
  }),
  amount: Joi.number().min(0).messages({
    "number.base": "The amount must be a number",
    "number.min": "The amount must be greater than or equal to 0",
  }),
  products: Joi.array().required().messages({
    "array.base": "The products must be an array",
    "array.required": "The products is required",
  }),
}).options({ abortEarly: false });

const querySchema = Joi.object({
  store_id: Joi.string().trim().messages({
    "string.base": "The store_id must be a string",
    "string.empty": "The store_id cannot be empty",
  }),
  amount: Joi.number().min(0).messages({
    "number.base": "The amount must be a number",
    "number.min": "The amount must be greater than or equal to 0",
  }),
}).options({ abortEarly: false });

module.exports = { bodySchema, querySchema };
