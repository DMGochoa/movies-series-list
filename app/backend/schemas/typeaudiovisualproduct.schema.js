const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(255);

const createTypeAudioVisualProductSchema = Joi.object({
  name: name.required(),
});

const updateTypeAudioVisualProductSchema = Joi.object({
  name: name,
});

const getTypeAudioVisualProductSchema = Joi.object({
  id: id.required()
});

module.exports = {createTypeAudioVisualProductSchema, updateTypeAudioVisualProductSchema, getTypeAudioVisualProductSchema}
