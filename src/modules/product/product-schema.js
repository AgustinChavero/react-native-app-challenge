const Joi = require("joi");

const bodySchema = Joi.object({
  store_id: Joi.string().trim().required().messages({
    "string.base": "The store_id must be a string",
    "string.empty": "The store_id cannot be empty",
    "string.required": "The store_id is required",
  }),
  discount_id: Joi.string().trim().messages({
    "string.base": "The discount_id must be a string",
    "string.empty": "The discount_id cannot be empty",
  }),
  brand: Joi.string().trim().max(255).required().messages({
    "string.base": "The brand must be a string",
    "string.empty": "The brand cannot be empty",
    "string.required": "The brand is required",
    "string.max": "The brand cannot exceed 255 characters",
  }),
  price: Joi.number().min(0).required().messages({
    "number.base": "The price must be a number",
    "number.empty": "The price cannot be empty",
    "number.required": "The price is required",
    "number.min": "The price must be greater than or equal to 0",
  }),
  size: Joi.string().trim().max(255).required().messages({
    "string.base": "The size must be a string",
    "string.empty": "The size cannot be empty",
    "string.required": "The size is required",
    "string.max": "The size cannot exceed 255 characters",
  }),
  stock: Joi.number().integer().min(0).required().messages({
    "number.base": "The stock must be a number",
    "number.empty": "The stock cannot be empty",
    "number.required": "The stock is required",
    "number.integer": "The stock must be an integer",
    "number.min": "The stock must be greater than or equal to 0",
  }),
  description: Joi.string().trim().max(1000).allow("").messages({
    "string.base": "The description must be a string",
    "string.max": "The description cannot exceed 1000 characters",
  }),
  quantity_sold: Joi.number().integer().min(0).messages({
    "number.base": "The quantity_sold must be a number",
    "number.integer": "The quantity_sold must be an integer",
    "number.min": "The quantity_sold must be greater than or equal to 0",
  }),
  qualification: Joi.number().integer().min(0).messages({
    "number.base": "The qualification must be a number",
    "number.integer": "The qualification must be an integer",
    "number.min": "The qualification must be greater than or equal to 0",
  }),
  in_discount: Joi.boolean().optional(),
  is_deleted: Joi.boolean().optional(),
}).options({ abortEarly: false });

const querySchema = Joi.object({
  store_id: Joi.string().trim().messages({
    "string.base": "The store_id must be a string",
    "string.empty": "The store_id cannot be empty",
  }),
  brand: Joi.string().trim().max(255).messages({
    "string.base": "The brand must be a string",
    "string.max": "The brand cannot exceed 255 characters",
  }),
  price: Joi.number().min(0).messages({
    "number.base": "The price must be a number",
    "number.min": "The price must be greater than or equal to 0",
  }),
  size: Joi.string().trim().max(255).messages({
    "string.base": "The size must be a string",
    "string.max": "The size cannot exceed 255 characters",
  }),
  stock: Joi.number().integer().min(0).messages({
    "number.base": "The stock must be a number",
    "number.integer": "The stock must be an integer",
    "number.min": "The stock must be greater than or equal to 0",
  }),
  description: Joi.string().trim().max(1000).messages({
    "string.base": "The description must be a string",
    "string.max": "The description cannot exceed 1000 characters",
  }),
  quantity_sold: Joi.number().integer().min(0).messages({
    "number.base": "The quantity_sold must be a number",
    "number.integer": "The quantity_sold must be an integer",
    "number.min": "The quantity_sold must be greater than or equal to 0",
  }),
  qualification: Joi.number().integer().min(0).messages({
    "number.base": "The qualification must be a number",
    "number.integer": "The qualification must be an integer",
    "number.min": "The qualification must be greater than or equal to 0",
  }),
  in_discount: Joi.boolean(),
  is_deleted: Joi.boolean(),
}).options({ abortEarly: false });

module.exports = { bodySchema, querySchema };
