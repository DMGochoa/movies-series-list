const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const ACTION_TABLE = 'modules';

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
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Action extends Model {
  static associate(models) {
    this.belongsTo(models.Module, { foreignKey: 'moduleId', as: 'module' });
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
