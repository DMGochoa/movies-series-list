const { Model, DataTypes, Sequelize } = require('sequelize');

const TYPE_AUDIO_VISUAL_PRODUCT_TABLE = 'types_audio_visual_products';

const TypeAudioVisualProductSchema = {
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

class TypeAudioVisualProduct extends Model {
  static associate(models) {
    this.hasMany(models.AudioVisualProduct, {
      foreignKey: 'typeId',
      as: 'products'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TYPE_AUDIO_VISUAL_PRODUCT_TABLE,
      modelName: 'TypeAudioVisualProduct',
      timestamps: false
    }
  }
}

module.exports = { TYPE_AUDIO_VISUAL_PRODUCT_TABLE, TypeAudioVisualProductSchema, TypeAudioVisualProduct }
