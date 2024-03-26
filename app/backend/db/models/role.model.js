const { Model, DataTypes, Sequelize } = require('sequelize');

const ROLE_TABLE = 'roles';

const RoleSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
};

class Role extends Model {
  static associate(models) {
    // define association here
    this.belongsToMany(models.Action, {
      through: models.RoleAction,
      as: 'roleactions',
      foreignKey: 'roleId',
      otherKey: 'actionId'
    });
    this.hasMany(models.User, {
      foreignKey: 'roleId',
      as: 'users'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: false
    }
  }
}

module.exports = { ROLE_TABLE, RoleSchema, Role }
