const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ModuleService {
  async createModule(data) {
    const newModule = await models.Module.create(data);
    return newModule;
  }

  async findAllModules() {
    const modules = await models.Module.findAll();
    if (!modules || modules.length === 0) {
      throw boom.notFound('Modules not found');
    }
    return modules;
  }

  async findModuleById(id) {
    const module = await models.Module.findByPk(id);
    if (!module) {
      throw boom.notFound('Module not found');
    }
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
