const Joi = require("joi");

const addContactsSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.number().min(7).required(),
  favorite: Joi.boolean(),
});
const putContactsSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).optional(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .optional(),
  phone: Joi.number().optional(),
}).min(1);

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { addContactsSchema, putContactsSchema, updateFavoriteSchema };
