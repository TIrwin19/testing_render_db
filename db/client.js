const { Sequelize } = require('sequelize')
const is_production = process.env.NODE_ENV
// const url = 'postgres://u7tjn0kapn7gfj:p29bf0d0e1575496ae38f5c2fed764133d013e2d8a858626f561b5e12e7eb9330@ceu9lmqblp8t3q.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d4b3l01vss0h5h'

const client = is_production ? new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}) :
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