const express = require('express');

const ActionService = require('../services/action.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createActionSchema, updateActionSchema, getActionSchema } = require('../schemas/action.schema');

const router = express.Router();
const service = new ActionService();

router.get('/',
  async (req, res, next) => {
    try {
      const actions = await service.findAllActions();
      res.json(actions);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getActionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const action = await service.findActionById(id);
      res.json(action);
    } catch (error) {
      next(error);
    }
});

router.get('/module/:moduleId',
  async (req, res, next) => {
    try {
      const { moduleId } = req.params;
      const actions = await service.findByModuleId(moduleId);
      res.json(actions);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createActionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAction = await service.createAction(body);
      res.status(201).json(newAction);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getActionSchema, 'params'),
  validatorHandler(updateActionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const action = await service.updateAction(id, body);
      res.json(action);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
  validatorHandler(getActionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const action = await service.deleteAction(id);
      res.json(action);
    } catch (error) {
      next(error);
    }
});

module.exports = router;
