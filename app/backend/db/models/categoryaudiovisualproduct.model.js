const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_AUDIO_VISUAL_PRODUCT_TABLE = 'categories_audio_visual_products';

const CategoryAudioVisualProductSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

class CategoryAudioVisualProduct extends Model {
  static associate(models) {
    this.hasMany(models.AudioVisualProduct, {
      foreignKey: 'categoryId',
      as: 'products'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_AUDIO_VISUAL_PRODUCT_TABLE,
      modelName: 'CategoryAudioVisualProduct',
      timestamps: false
    }
  }
}

module.exports = { CATEGORY_AUDIO_VISUAL_PRODUCT_TABLE, CategoryAudioVisualProductSchema, CategoryAudioVisualProduct }
