const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(255);

const createModuleSchema = Joi.object({
  name: name.required(),
});

const updateModuleSchema = Joi.object({
  name: name,
});

const getModuleSchema = Joi.object({
  id: id.required()
});

module.exports = {createModuleSchema, updateModuleSchema, getModuleSchema}
