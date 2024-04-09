const express = require('express');

const AudioVisualProductListService = require('../services/audiovisualproductlist.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createAudioVisualProductListSchema, updateAudioVisualProductListSchema, getAudioVisualProductListSchema } = require('../schemas/audiovisualproductlist.schema');

const router = express.Router();
const service = new AudioVisualProductListService();

router.get('/',
  async (req, res, next) => {
    try {
      const audioVisualProductList = await service.findAllAudioVisualProductList();
      res.json(audioVisualProductList);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getAudioVisualProductListSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const audioVisualProductList = await service.findAudioVisualProductListById(id);
      res.json(audioVisualProductList);
    } catch (error) {
      next(error);
    }
});

router.get('/user/:userId',
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const audioVisualProductList = await service.findAudioVisualProductListByUserId(userId);
      res.json(audioVisualProductList);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createAudioVisualProductListSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAudioVisualProductList = await service.createAudioVisualProductList(body);
      res.status(201).json(newAudioVisualProductList);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getAudioVisualProductListSchema, 'params'),
  validatorHandler(updateAudioVisualProductListSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const audioVisualProductList = await service.updateAudioVisualProductList(id, body);
      res.json(audioVisualProductList);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
  validatorHandler(getAudioVisualProductListSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteAudioVisualProductList(id);
      res.json({ id });
    } catch (error) {
      next(error);
    }
});
