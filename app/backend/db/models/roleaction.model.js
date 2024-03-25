const { Model, DataTypes, Sequelize } = require('sequelize');
const { ROLE_TABLE } = require('./role.model');
const { ACTION_TABLE } = require('./action.model');

const ROLE_ACTION_TABLE = 'roles_actions';

const RoleActionSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  roleId: {
    field: 'role_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ROLE_TABLE,
      key: 'id'
    },
  },
  actionId: {
    field: 'action_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ACTION_TABLE,
      key: 'id'
    },
  }
};

class RoleAction extends Model {
  static associate(models) {
    this.belongsTo(models.Role, {
      as: 'role'
    });
    this.belongsTo(models.Action, {
      as: 'action'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLE_ACTION_TABLE,
      modelName: 'RoleAction',
      timestamps: false
    }
  }
}

module.exports = { ROLE_ACTION_TABLE, RoleActionSchema, RoleAction }
