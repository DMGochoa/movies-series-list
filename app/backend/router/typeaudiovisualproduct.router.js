const express = require('express');

const TypeAudioVisualProductService = require('../services/typeaudiovisualproduct.service');
const { validatorHandler } = require('../middlewares');
const { createTypeAudioVisualProductSchema, updateTypeAudioVisualProductSchema, getTypeAudioVisualProductSchema } = require('../schemas/typeaudiovisualproduct.schema');

const router = express.Router();
const service = new TypeAudioVisualProductService();

router.get('/',
  async (req, res, next) => {
    try {
      const typesAudioVisualProducts = await service.findAllTypeAudioVisualProducts();
      res.json(typesAudioVisualProducts);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getTypeAudioVisualProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const typeAudioVisualProduct = await service.findTypeAudioVisualProductById(id);
      res.json(typeAudioVisualProduct);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createTypeAudioVisualProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTypeAudioVisualProduct = await service.createTypeAudioVisualProduct(body);
      res.status(201).json(newTypeAudioVisualProduct);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getTypeAudioVisualProductSchema, 'params'),
  validatorHandler(updateTypeAudioVisualProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const typeAudioVisualProduct = await service.updateTypeAudioVisualProduct(id, body);
      res.json(typeAudioVisualProduct);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
  validatorHandler(getTypeAudioVisualProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const typeAudioVisualProduct = await service.deleteTypeAudioVisualProduct(id);
      res.json(typeAudioVisualProduct);
    } catch (error) {
      next(error);
    }
});

module.exports = router;
