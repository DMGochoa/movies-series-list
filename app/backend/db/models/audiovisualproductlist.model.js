const {Model, DataTypes, Sequelize} = require('sequelize');
const { USER_TABLE } = require('./user.model');

const AUDIO_VISUAL_PRODUCT_LIST_TABLE = 'audio_visual_product_lists';

const AudioVisualProductListSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    field: 'user_id',
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

class AudioVisualProductList extends Model {
  static associate(models) {
    this.belongsToMany(models.AudioVisualProduct, {
      through: models.ItemAudioVisualList,
      as: 'audioVisualProducts',
      foreignKey: 'audioVisualProductListId',
      otherKey: 'audioVisualProductId'
    });
    this.belongsTo(models.User, {
      as: 'user',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AUDIO_VISUAL_PRODUCT_LIST_TABLE,
      modelName: 'audiovisualproductlist',
      timestamps: false
    }
  }
}

module.exports = { AUDIO_VISUAL_PRODUCT_LIST_TABLE, AudioVisualProductListSchema, AudioVisualProductList }
