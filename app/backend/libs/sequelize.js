const { Sequelize } = require('sequelize')

const { config } = require('./../db/config')
const env = require('./../config/config');
const setupModels = require('./../db/models')


const dbConfig = config[config.environment]

const sequelize = new Sequelize(
  dbConfig.url,
  {
    dialect: dbConfig.dialect,
    logging: env.env === 'development'
  }
)

setupModels(sequelize)

module.exports = sequelize
