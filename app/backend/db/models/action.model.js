const { Model, DataTypes, Sequelize } = require('sequelize');
const { MODULE_TABLE } = require('./module.model');

const ACTION_TABLE = 'actions';

const ActionSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  moduleId: {
    field: 'module_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: MODULE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Action extends Model {
  static associate(models) {
    this.belongsTo(models.Module, {
      as: 'module',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTION_TABLE,
      modelName: 'Action',
      timestamps: false
    }
  }
}

module.exports = { ACTION_TABLE, ActionSchema, Action }
