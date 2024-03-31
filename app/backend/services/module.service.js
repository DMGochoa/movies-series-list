const { models } = require('../libs/sequelize');
const verifyExistence = require('../utils/verification');

class ModuleService {
  constructor() {
    this.notFoundMessage = 'Module not found';
  }

  async createModule(data) {
    const newModule = await models.Module.create(data);
    return newModule;
  }

  async findAllModules() {
    const modules = await models.Module.findAll();
    verifyExistence(modules, this.notFoundMessage, modules.length === 0);
    return modules;
  }

  async findModuleById(id) {
    const module = await models.Module.findByPk(id);
    verifyExistence(module, this.notFoundMessage);
    return module;
  }

  async updateModule(id, data) {
    const module = await this.findModuleById(id);
    const moduleUpdated = await module.update(data);
    return moduleUpdated;
  }

  async deleteModule(id) {
    const module = await this.findModuleById(id);
    await module.destroy();
    return { id };
  }
}

module.exports = ModuleService;
