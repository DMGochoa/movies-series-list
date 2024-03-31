const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(255);

const createRoleSchema = Joi.object({
  name: name.required(),
});

const updateRoleSchema = Joi.object({
  name: name,
});

const getRoleSchema = Joi.object({
  id: id.required()
});

module.exports = {createRoleSchema, updateRoleSchema, getRoleSchema}
