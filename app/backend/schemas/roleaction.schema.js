const Joi = require('joi');

const id = Joi.number().integer().min(1);
const roleId = Joi.number().integer().min(1);
const actionId = Joi.number().integer().min(1);

const createRoleActionSchema = Joi.object({
  roleId: roleId.required(),
  actionId: actionId.required()
});

const updateRoleActionSchema = Joi.object({
  roleId: roleId,
  actionId: actionId
});

const getRoleActionSchema = Joi.object({
  id: id.required()
});

module.exports = {createRoleActionSchema, updateRoleActionSchema, getRoleActionSchema}
