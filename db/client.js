const { Sequelize } = require('sequelize')
const is_production = process.env.NODE_ENV

const client = is_production ? new Sequelize(process.env.DATABASE_URL) : 
  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
      logging: false
    }
  )

module.exports = client