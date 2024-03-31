const { models } = require('../libs/sequelize');
const verifyExistence = require('../utils/verification');

class RoleService {
  constructor() {
    this.notFoundMessage = 'Role not found';
  }

  async createRole(data) {
    const newRole = await models.Role.create(data);
    return newRole;
  }

  async findAllRoles() {
    const roles = await models.Role.findAll();
    verifyExistence(roles, this.notFoundMessage, roles.length === 0);
    return roles;
  }

  async findRoleById(id) {
    const role = await models.Role.findByPk(id);
    verifyExistence(role, this.notFoundMessage);
    return role;
  }

  async updateRole(id, data) {
    const role = await this.findRoleById(id);
    const roleUpdated = await role.update(data);
    return roleUpdated;
  }

  async deleteRole(id) {
    const role = await this.findRoleById(id);
    await role.destroy();
    return { id };
  }
}

module.exports = RoleService;
