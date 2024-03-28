const { Model, DataTypes, Sequelize } = require('sequelize');

const MODULE_TABLE = 'modules';

const ModuleSchema = {
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

class Module extends Model {
  static associate(models) {
    this.hasMany(models.Action,
      {
        foreignKey: 'moduleId',
        as: 'actions'
      });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MODULE_TABLE,
      modelName: 'Module',
      timestamps: false
    }
  }
}

module.exports = { MODULE_TABLE, ModuleSchema, Module }
