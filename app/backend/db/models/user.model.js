const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleId: {
    field: 'role_id',
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

class User extends Model {
  static associate(models) {
    this.belongsTo(models.Role, {
      as: 'role',
    });
    this.hasMany(models.AudioVisualProductList, {
      foreignKey: 'userId',
      as: 'lists'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
