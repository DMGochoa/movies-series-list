'use strict';

const { ModuleSchema, MODULE_TABLE } = require('../models/module.model');
const { RoleSchema, ROLE_TABLE } = require('../models/role.model');
const { ActionSchema, ACTION_TABLE } = require('../models/action.model');
const { RoleActionSchema, ROLE_ACTION_TABLE } = require('../models/roleaction.model');
const { UserSchema, USER_TABLE } = require('../models/user.model');
const { AudioVisualProductListSchema, AUDIO_VISUAL_PRODUCT_LIST_TABLE } = require('../models/audiovisualproductlist.model');
const { CategoryAudioVisualProductSchema, CATEGORY_AUDIO_VISUAL_PRODUCT_TABLE } = require('../models/categoryaudiovisualproduct.model');
const { TypeAudioVisualProductSchema, TYPE_AUDIO_VISUAL_PRODUCT_TABLE } = require('../models/typeaudiovisualproduct.model');
const { AudioVisualProductSchema, AUDIO_VISUAL_PRODUCT_TABLE } = require('../models/audiovisualproduct.model');
const { ItemAudioVisualListSchema, ITEM_AUDIO_VISUAL_LIST_TABLE } = require('../models/itemaudiovisuallist.model');

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
    await queryInterface.createTable(AUDIO_VISUAL_PRODUCT_LIST_TABLE, AudioVisualProductListSchema);
    await queryInterface.createTable(CATEGORY_AUDIO_VISUAL_PRODUCT_TABLE, CategoryAudioVisualProductSchema);
    await queryInterface.createTable(TYPE_AUDIO_VISUAL_PRODUCT_TABLE, TypeAudioVisualProductSchema);
    await queryInterface.createTable(AUDIO_VISUAL_PRODUCT_TABLE, AudioVisualProductSchema);
    await queryInterface.createTable(ITEM_AUDIO_VISUAL_LIST_TABLE, ItemAudioVisualListSchema);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(ITEM_AUDIO_VISUAL_LIST_TABLE);
    await queryInterface.dropTable(AUDIO_VISUAL_PRODUCT_TABLE);
    await queryInterface.dropTable(TYPE_AUDIO_VISUAL_PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_AUDIO_VISUAL_PRODUCT_TABLE);
    await queryInterface.dropTable(AUDIO_VISUAL_PRODUCT_LIST_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ROLE_ACTION_TABLE);
    await queryInterface.dropTable(ROLE_TABLE);
    await queryInterface.dropTable(ACTION_TABLE);
    await queryInterface.dropTable(MODULE_TABLE);
  }
};
