const { models } = require('../libs/sequelize');
const verifyExistence = require('../utils/verification');

class AudioVisualProductListService {
  constructor() {
    this.notFoundMessage = 'AudioVisualProductList not found';
  }

  async createAudioVisualProductList(data) {
    const newAudioVisualProductList = await models.AudioVisualProductList.create(data);
    return newAudioVisualProductList;
  }

  async findAllAudioVisualProductList() {
    const audioVisualProductList = await models.AudioVisualProductList.findAll({
      include: {
        model: models.User,
        as: 'user',
      },
    });
    verifyExistence(audioVisualProductList, this.notFoundMessage, audioVisualProductList.length === 0);
    return audioVisualProductList;
  }

  async findAudioVisualProductListById(id) {
    const audioVisualProductList = await models.AudioVisualProductList.findByPk(id, {
      include: {
        model: models.User,
        as: 'user',
      },
    });
    verifyExistence(audioVisualProductList, this.notFoundMessage);
    return audioVisualProductList;
  }

  async findAudioVisualProductListByUserId(userId) {
    const audioVisualProductList = await models.AudioVisualProductList.findAll({
      where: {
        userId,
      },
      include: {
        model: models.User,
        as: 'user',
      },
    });
    verifyExistence(audioVisualProductList, this.notFoundMessage, audioVisualProductList.length === 0);
    return audioVisualProductList;
  }

  async updateAudioVisualProductList(id, data) {
    const audioVisualProductList = await this.findAudioVisualProductListById(id);
    const audioVisualProductListUpdated = await audioVisualProductList.update(data);
    return audioVisualProductListUpdated;
  }

  async deleteAudioVisualProductList(id) {
    const audioVisualProductList = await this.findAudioVisualProductListById(id);
    await audioVisualProductList.destroy();
  }
}

module.exports = AudioVisualProductListService;
