const Joi = require('joi');

const id = Joi.number().integer().min(1);
const userId = Joi.number().integer().min(1);
const title = Joi.string().min(1).max(255);

const createAudioVisualProductListSchema = Joi.object({
  userId: userId.required(),
  title: title.required(),
});

const updateAudioVisualProductListSchema = Joi.object({
  userId: userId,
  title: title,
});

const getAudioVisualProductListSchema = Joi.object({
  id: id.required()
});

module.exports = {createAudioVisualProductListSchema, updateAudioVisualProductListSchema, getAudioVisualProductListSchema}
