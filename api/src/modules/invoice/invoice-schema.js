const Joi = require("joi");

const bodySchema = Joi.object({
  store_id: Joi.string().trim().required().messages({
    "string.base": "The store_id must be a string",
    "string.empty": "The store_id cannot be empty",
    "string.required": "The store_id is required",
  }),
  user_id: Joi.string().trim().required().messages({
    "string.base": "The user_id must be a string",
    "string.empty": "The user_id cannot be empty",
    "string.required": "The user_id is required",
  }),
  buyer_dni: Joi.string().trim().required().messages({
    "string.base": "The buyer_dni must be a string",
    "string.empty": "The buyer_dni cannot be empty",
    "string.required": "The buyer_dni is required",
  }),
  buyer_name: Joi.string().trim().required().messages({
    "string.base": "The buyer_name must be a string",
    "string.empty": "The buyer_name cannot be empty",
    "string.required": "The buyer_name is required",
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
