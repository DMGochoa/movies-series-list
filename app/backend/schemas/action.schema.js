const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(255);
const moduleId = Joi.number().integer().min(1);

const createActionSchema = Joi.object({
  name: name.required(),
  moduleId: moduleId.required(),
});

const updateActionSchema = Joi.object({
  name: name,
  moduleId: moduleId,
});

const getActionSchema = Joi.object({
  id: id.required()
});

module.exports = {createActionSchema, updateActionSchema, getActionSchema}
