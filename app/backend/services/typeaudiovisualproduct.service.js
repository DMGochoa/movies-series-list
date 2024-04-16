const { models } = require('../libs/sequelize');
const verifyExistence = require('../utils/verification');

class TypeAudioVisualProductService {
  constructor() {
    this.notFoundMessage = 'Type audio visual product not found';
  }

  async createTypeAudioVisualProduct(data) {
    const newTypeAudioVisualProduct = await models.TypeAudioVisualProduct.create(data);
    return newTypeAudioVisualProduct;
  }

  async findAllTypeAudioVisualProducts() {
    const typesAudioVisualProducts = await models.TypeAudioVisualProduct.findAll();
    verifyExistence(typesAudioVisualProducts, this.notFoundMessage, typesAudioVisualProducts.length === 0);
    return typesAudioVisualProducts;
  }

  async findTypeAudioVisualProductById(id) {
    const typeAudioVisualProduct = await models.TypeAudioVisualProduct.findByPk(id);
    verifyExistence(typeAudioVisualProduct, this.notFoundMessage);
    return typeAudioVisualProduct;
  }

  async updateTypeAudioVisualProduct(id, data) {
    const typeAudioVisualProduct = await this.findTypeAudioVisualProductById(id);
    const typeAudioVisualProductUpdated = await typeAudioVisualProduct.update(data);
    return typeAudioVisualProductUpdated;
  }

  async deleteTypeAudioVisualProduct(id) {
    const typeAudioVisualProduct = await this.findTypeAudioVisualProductById(id);
    await typeAudioVisualProduct.destroy();
    return { id };
  }
}

module.exports = TypeAudioVisualProductService;
