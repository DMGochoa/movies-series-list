const { Model, DataTypes, Sequelize } = require('sequelize');
const { AUDIO_VISUAL_PRODUCT_TABLE } = require('./audiovisualproduct.model');
const { AUDIO_VISUAL_PRODUCT_LIST_TABLE } = require('./audiovisualproductlist.model');

const ITEM_AUDIO_VISUAL_LIST_TABLE = 'items_audio_visual_lists';

const ItemAudioVisualListSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  audioVisualProductId: {
    field: 'audio_visual_product_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AUDIO_VISUAL_PRODUCT_TABLE,
      key: 'id'
    }
  },
  audioVisualProductListId: {
    field: 'audio_visual_product_list_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AUDIO_VISUAL_PRODUCT_LIST_TABLE,
      key: 'id'
    }
  }
};

class ItemAudioVisualList extends Model {
  static associate(models) {
    this.belongsTo(models.AudioVisualProduct, {
      as: 'audioVisualProduct'
    });
    this.belongsTo(models.AudioVisualProductList, {
      as: 'audioVisualProductList'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ITEM_AUDIO_VISUAL_LIST_TABLE,
      modelName: 'ItemAudioVisualList',
      timestamps: false
    }
  }
}

module.exports = { ITEM_AUDIO_VISUAL_LIST_TABLE, ItemAudioVisualListSchema, ItemAudioVisualList }
