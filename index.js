const { Sequelize, DataTypes, Model } = require('sequelize')
const {hash, compare} = require('bcrypt')

const client = new Sequelize(
  'sequelize_practice_db',
  'postgres',
  'clim6er',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
)

// Create note table
class Note extends Model { }
Note.init(
  {
    text: {
      type: DataTypes.STRING, //VARCHAR(255)
      allowNull: false
    }
  },
  {
    sequelize: client
  }
)

// Create user table
class User extends Model {
  async validatePass(formPassword){
    const is_valid = await compare(formPassword, this.password)
    
    return is_valid
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: 6
      },
      allowNull: false
    }
  },
  {
    sequelize: client,
    hooks: {
      async beforeCreate(user) {
        user.password = await hash(user.password, 10)
      }
    }
  }
)

// Sets up foreign key for assosiation
User.hasMany(Note) //userId on each note
Note.belongsTo(User)

client.sync({ force: false })
  .then(async () => {

    try{
      const user = await User.findByPk(10)
      const formPassword = '123456'

      const valid = await user.validatePass(formPassword)

      if(valid){
        console.log('Welcome Back!')
      } else {
        console.log('Password incorrect')
      } 

      // const bob = await User.create({
      //   email: 'bob@test.com',
      //   password: '123456'
      // })
      // console.log('Created User:', bob.email)

      // await User.destroy()

      // const note = await Note.findByPk(5, {
      //   include: User
      // })
      // console.log(note)

      // const users = await User.findAll({
      //   include: Note
      // })

      // console.log(users[0]) 

      // const user = await User.findOne({ //All notes for assiciated user
      //   where:{
      //     email: 'test@test.com'
      //   },
      //   include: {
      //     model: Note,
      //     attributes: ['text']
      //   }
      // })

      // const note = await Note.create({
      //   text: 'Random Note',
      //   UserId: user.id
      // })
      // console.log(note)

      // const user = await User.findByPk(1)

      // const test = await User.create({
      //   email: 'test@test.com',
      //   password: 123456
      // })
      // console.log('Created User:', test.email)

      
      // const note = await user.createNote({
      //   text: 'Note one for JD'
      // })
      // console.log(note.text)
        
    } catch(err) {
      console.error(err)
    }
    


    // const note = await Note.create({
    //   text: 'Text for note one'
    // })

    // const getNote = await Note.findAll({ // All rows
    //   attributes: ['text'], // SELECT text FROM Notes
    //   where: {
    //     id: 1
    //   }
    // })

    // const getNote = await Note.findOne({ // Single row
    //   where: {
    //     id: 1
    //   }
    // })

    // const getNote = await Note.findByPk(3) // Find by id or primary key

    // console.log(getNote)

    // Find allnotes
    // Note.findAll()
    //   .then(notes => {
    //     console.log(notes[1].text)
    //   })

    // const results = await Note.update(
    //   {text: 'New text for note!'},
    //   {
    //     where: {
    //       id: 1
    //     },
    //     returning: true
    //   }
    // )

    // console.log(results[1][0].text)

    // const [ammountOfUpdatedRows, allUpdatedNotes] = await Note.update(
    //   {text: 'New text for note!'},
    //   {
    //     where: {
    //       id: 1
    //     },
    //     returning: true
    //   }
    // )

    // console.log(allUpdatedNotes)

    // await Note.destroy({ // Delete a row
    //   where: {
    //     id: [1]
    //   }
    // })

  })