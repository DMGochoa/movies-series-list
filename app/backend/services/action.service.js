const { models } = require('../libs/sequelize');
const verifyExistence = require('../utils/verification');

class ActionService {
  constructor() {
    this.notFoundMessage = 'Action not found';
  }

  async createAction(data) {
    const ModuleService = require('./module.service');
    const moduleService = new ModuleService();
    await moduleService.findModuleById(data.moduleId);
    const newAction = await models.Action.create(data);
    return newAction;
  }

  async findAllActions() {
    const actions = await models.Action.findAll({
      include: {
        model: models.Module,
        as: 'module',
      },
    });
    verifyExistence(actions, this.notFoundMessage, actions.length === 0);
    return actions;
  }

  async findByModuleId(moduleId) {
    const actions = await models.Action.findAll({
      where: {
        moduleId,
      },
      include: {
        model: models.Module,
        as: 'module',
      },
    });
    verifyExistence(actions, this.notFoundMessage, actions.length === 0);
    return actions;
  }

  async findActionById(id) {
    const action = await models.Action.findByPk(id, {
      include: {
        model: models.Module,
        as: 'module',
      },
    });
    verifyExistence(action, this.notFoundMessage);
    return action;
  }

  async updateAction(id, data) {
    const action = await this.findActionById(id);
    const actionUpdated = await action.update(data);
    return actionUpdated;
  }

  async deleteAction(id) {
    const action = await this.findActionById(id);
    await action.destroy();
    return { id };
  }
}

module.exports = ActionService;
