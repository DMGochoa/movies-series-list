const { models } = require('../libs/sequelize');
const verifyExistence = require('../utils/verification');

class UserService {
  constructor() {
    this.notFoundMessage = 'User not found';
  }

  async createUser(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async findAllUsers() {
    const users = await models.User.findAll();
    verifyExistence(users, this.notFoundMessage, users.length === 0);
    return users;
  }

  async findUserById(id) {
    const user = await models.User.findByPk(id);
    verifyExistence(user, this.notFoundMessage);
    return user;
  }

  async findUserByUsername(username) {
    const user = await models.User.findOne({
      where: {
        username,
      },
    });
    verifyExistence(user, this.notFoundMessage);
    return user;
  }

  async updateUser(id, data) {
    const user = await this.findUserById(id);
    const userUpdated = await user.update(data);
    return userUpdated;
  }

  async deleteUser(id) {
    const user = await this.findUserById(id);
    await user.destroy();
  }
}

module.exports = UserService;
