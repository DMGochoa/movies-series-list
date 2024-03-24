const { Module, ModuleSchema } = require('./module.model');

function setupModels(sequelize) {
  Module.init(ModuleSchema, Module.config(sequelize));
}

module.exports = setupModels;
