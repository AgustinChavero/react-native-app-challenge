const Joi = require("joi");

const bodySchema = Joi.object({
  store_id: Joi.string().trim().required().messages({
    "string.base": "The store_id must be a string",
    "string.empty": "The store_id cannot be empty",
    "string.required": "The store_id is required",
  }),
  name: Joi.string().trim().max(255).required().messages({
    "string.base": "The name must be a string",
    "string.empty": "The name cannot be empty",
    "string.required": "The name is required",
    "string.max": "The name cannot exceed 255 characters",
  }),
  email: Joi.string().trim().email().required().messages({
    "string.base": "The email must be a string",
    "string.empty": "The email cannot be empty",
    "string.email": "Invalid email format",
    "string.required": "The email is required",
  }),
  password: Joi.string().trim().required().messages({
    "string.base": "The password must be a string",
    "string.empty": "The password cannot be empty",
    "string.required": "The password is required",
  }),
  phone: Joi.number().integer().min(0).default(0).messages({
    "number.base": "The phone must be a number",
    "number.integer": "The phone must be an integer",
    "number.min": "The phone must be greater than or equal to 0",
  }),
  is_deleted: Joi.boolean().optional(),
}).options({ abortEarly: false });

const querySchema = Joi.object({
  store_id: Joi.string().trim().required().messages({
    "string.base": "The store_id must be a string",
    "string.empty": "The store_id cannot be empty",
    "string.required": "The store_id is required",
  }),
  name: Joi.string().trim().max(255).messages({
    "string.base": "The name must be a string",
    "string.max": "The name cannot exceed 255 characters",
  }),
  email: Joi.string().trim().email().messages({
    "string.base": "The email must be a string",
    "string.email": "Invalid email format",
  }),
  phone: Joi.number().integer().min(0).messages({
    "number.base": "The phone must be a number",
    "number.integer": "The phone must be an integer",
    "number.min": "The phone must be greater than or equal to 0",
  }),
  is_deleted: Joi.boolean(),
}).options({ abortEarly: false });

module.exports = { bodySchema, querySchema };
