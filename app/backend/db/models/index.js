const { Module, ModuleSchema } = require('./module.model');
const { Action, ActionSchema } = require('./action.model');
const { Role, RoleSchema } = require('./role.model');
const { RoleAction, RoleActionSchema } = require('./roleaction.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  Module.init(ModuleSchema, Module.config(sequelize));
  Action.init(ActionSchema, Action.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  RoleAction.init(RoleActionSchema, RoleAction.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  Module.associate(sequelize.models);
  Action.associate(sequelize.models);
  Role.associate(sequelize.models);
  User.associate(sequelize.models);
}

module.exports = setupModels;
