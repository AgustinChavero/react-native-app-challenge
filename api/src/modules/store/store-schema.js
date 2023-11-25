const Joi = require("joi");

const bodySchema = Joi.object({
  street: Joi.string().trim().max(255).required().messages({
    "string.base": "The street must be a string",
    "string.empty": "The street cannot be empty",
    "string.required": "The street is required",
    "string.max": "The street cannot exceed 255 characters",
  }),
  number: Joi.number().integer().min(0).default(0).messages({
    "number.base": "The number must be a number",
    "number.integer": "The number must be an integer",
    "number.min": "The number must be greater than or equal to 0",
  }),
  code_zone: Joi.number().integer().min(0).default(0).messages({
    "number.base": "The code zone must be a number",
    "number.integer": "The code zone must be an integer",
    "number.min": "The code zone must be greater than or equal to 0",
  }),
  is_deleted: Joi.boolean().optional(),
}).options({ abortEarly: false });

const querySchema = Joi.object({
  street: Joi.string().trim().max(255).messages({
    "string.base": "The street must be a string",
    "string.max": "The street cannot exceed 255 characters",
  }),
  number: Joi.number().integer().min(0).messages({
    "number.base": "The number must be a number",
    "number.integer": "The number must be an integer",
    "number.min": "The number must be greater than or equal to 0",
  }),
  code_zone: Joi.number().integer().min(0).messages({
    "number.base": "The code zone must be a number",
    "number.integer": "The code zone must be an integer",
    "number.min": "The code zone must be greater than or equal to 0",
  }),
  is_deleted: Joi.boolean(),
}).options({ abortEarly: false });

module.exports = { bodySchema, querySchema };
