const { models } = require('../libs/sequelize');
const verifyExistence = require('../utils/verification');
const RoleService = require('./role.service');
const ActionService = require('./action.service');

class RoleActionService {
  constructor() {
    this.notFoundMessage = 'RoleAction not found';
  }

  async createRoleAction(data) {
    const roleService = new RoleService();
    await roleService.findRoleById(data.roleId);
    const actionService = new ActionService();
    await actionService.findActionById(data.actionId);
    const newRoleAction = await models.RoleAction.create(data);
    return newRoleAction;
  }

  async findAllRoleActions() {
    const roleActions = await models.RoleAction.findAll();
    verifyExistence(roleActions, this.notFoundMessage, roleActions.length === 0);
    return roleActions;
  }

  async findRoleActionById(id) {
    const roleAction = await models.RoleAction.findByPk(id, {
      include: [
        {
          model: models.Role,
          as: 'role',
        },
        {
          model: models.Action,
          as: 'action',
        },
      ],
    });
    verifyExistence(roleAction, this.notFoundMessage);
    return roleAction;
  }

  async findByRoleId(roleId) {
    const roleActions = await models.RoleAction.findAll({
      where: {
        roleId,
      },
      include: [
        {
          model: models.Role,
          as: 'role',
        },
        {
          model: models.Action,
          as: 'action',
        },
      ],
    });
    verifyExistence(roleActions, this.notFoundMessage, roleActions.length === 0);
    return roleActions;
  }

  async updateRoleAction(id, data) {
    const roleAction = await this.findRoleActionById(id);
    const roleActionUpdated = await roleAction.update(data);
    return roleActionUpdated;
  }

  async deleteRoleAction(id) {
    const roleAction = await this.findRoleActionById(id);
    await roleAction.destroy();
    return { id };
  }
}
