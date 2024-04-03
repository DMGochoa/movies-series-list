const express = require('express');

const RoleActionService = require('../services/roleaction.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createRoleActionSchema, updateRoleActionSchema, getRoleActionSchema } = require('../schemas/roleaction.schema');

const router = express.Router();
const service = new RoleActionService();

router.get('/',
  async (req, res, next) => {
    try {
      const roleActions = await service.findAllRoleActions();
      res.json(roleActions);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getRoleActionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const roleAction = await service.findRoleActionById(id);
      res.json(roleAction);
    } catch (error) {
      next(error);
    }
});

router.get('/role/:roleId',
  async (req, res, next) => {
    try {
      const { roleId } = req.params;
      const roleActions = await service.findByRoleId(roleId);
      res.json(roleActions);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createRoleActionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRoleAction = await service.createRoleAction(body);
      res.status(201).json(newRoleAction);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getRoleActionSchema, 'params'),
  validatorHandler(updateRoleActionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const roleAction = await service.updateRoleAction(id, body);
      res.json(roleAction);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
  validatorHandler(getRoleActionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await service.deleteRoleAction(id);
      res.json(response);
    } catch (error) {
      next(error);
    }
});

module.exports = router;
