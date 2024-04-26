const { DataTypes, Model } = require('sequelize')
const { hash, compare } = require('bcrypt')
const client = require('../db/client')

class Player extends Model {
  async validatePass(formPassword) {
    const is_valid = await compare(formPassword, this.password)

    return is_valid
  }

  toJSON() {
    const player = Object.assign({}, this.get())

    delete player.password

    return player
  }
}

Player.init(
  {
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'That email address is already in use.'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Must provide a valid email'
        }
      },
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: 6,
          mesg: 'Password must be at least 6 characters long'
        }
      },
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize: client,
    modelName: 'player',
    hooks: {
      async beforeCreate(user) {
        user.password = await hash(user.password, 10)
      }
    }
  }
)

module.exports = Player