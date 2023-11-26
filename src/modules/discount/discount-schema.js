const Joi = require("joi");

const bodySchema = Joi.object({
  type: Joi.string()
    .valid("2x1", "3x2", "5%", "10%", "12%", "15%", "20%", "25%", "30%", "40%", "50%")
    .required()
    .messages({
      "any.only": "Invalid discount type",
      "string.base": "The type must be a string",
      "string.empty": "The type cannot be empty",
      "string.required": "The type is required",
    }),
  percentage: Joi.number().min(0).messages({
    "number.base": "The percentage must be a number",
    "number.min": "The percentage must be greater than or equal to 0",
  }),
  is_deleted: Joi.boolean().optional(),
}).options({ abortEarly: false });

const querySchema = Joi.object({
  type: Joi.string()
    .valid("2x1", "3x2", "5%", "10%", "12%", "15%", "20%", "25%", "30%", "40%", "50%")
    .messages({
      "any.only": "Invalid discount type",
      "string.base": "The type must be a string",
    }),
  percentage: Joi.number().min(0).messages({
    "number.base": "The percentage must be a number",
    "number.min": "The percentage must be greater than or equal to 0",
  }),
  is_deleted: Joi.boolean(),
}).options({ abortEarly: false });

module.exports = { bodySchema, querySchema };
