const express = require('express');

const ModuleService = require('../services/module.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createModuleSchema, updateModuleSchema, getModuleSchema } = require('../schemas/module.schema');

const router = express.Router();
const service = new ModuleService();

router.get('/',
  async (req, res, next) => {
    try {
      const modules = await service.findAllModules();
      res.json(modules);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getModuleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const module = await service.findModuleById(id);
      res.json(module);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createModuleSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newModule = await service.createModule(body);
      res.status(201).json(newModule);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getModuleSchema, 'params'),
  validatorHandler(updateModuleSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const module = await service.updateModule(id, body);
      res.json(module);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
  validatorHandler(getModuleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteModule(id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
});

module.exports = router;
