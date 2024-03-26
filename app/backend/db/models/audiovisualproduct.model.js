const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_AUDIO_VISUAL_PRODUCT_TABLE } = require('./categoryaudiovisualproduct.model');
const { TYPE_AUDIO_VISUAL_PRODUCT_TABLE } = require('./typeaudiovisualproduct.model');

const AUDIO_VISUAL_PRODUCT_TABLE = 'audio_visual_products';

const AudioVisualProductSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  categoryId: {
    field: 'category_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CATEGORY_AUDIO_VISUAL_PRODUCT_TABLE,
      key: 'id'
    },
  },
  typeId: {
    field: 'type_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TYPE_AUDIO_VISUAL_PRODUCT_TABLE,
      key: 'id'
    },
  }
};

class AudioVisualProduct extends Model {
  static associate(models) {
    this.belongsTo(models.CategoryAudioVisualProduct, {
      as: 'category',
    });
    this.belongsTo(models.TypeAudioVisualProduct, {
      as: 'type',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AUDIO_VISUAL_PRODUCT_TABLE,
      modelName: 'AudioVisualProduct',
      timestamps: false
    }
  }
}

module.exports = { AUDIO_VISUAL_PRODUCT_TABLE, AudioVisualProductSchema, AudioVisualProduct }
