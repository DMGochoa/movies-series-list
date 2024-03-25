'use strict';

const { ModuleSchema, MODULE_TABLE } = require('../models/module.model');
const { RoleSchema, ROLE_TABLE } = require('../models/role.model');
const { ActionSchema, ACTION_TABLE } = require('../models/action.model');
const { RoleActionSchema, ROLE_ACTION_TABLE } = require('../models/roleaction.model');
const { UserSchema, USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(MODULE_TABLE, ModuleSchema);
    await queryInterface.createTable(ROLE_TABLE, RoleSchema);
    await queryInterface.createTable(ACTION_TABLE, ActionSchema);
    await queryInterface.createTable(ROLE_ACTION_TABLE, RoleActionSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ROLE_ACTION_TABLE);
    await queryInterface.dropTable(ROLE_TABLE);
    await queryInterface.dropTable(ACTION_TABLE);
    await queryInterface.dropTable(MODULE_TABLE);
  }
};
