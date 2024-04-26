const router = require('express').Router()

// Import the team and player models
const { Team, Player } = require('../models')

function handleValidationError(err, res) {
console.log(err)

  const errors = err.errors.map(eObj => {
    return {
      message: eObj.message
    }
  })

  res.json({
    message: 'Your request failed.',
    errors: errors
  })
}

// Create a GET route to get all teams and attach their players
router.get('/teams', async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: {
        model: Player,
        attributes: {
          exclute: ['password']
        }
      } 
    })

    res.json(teams)

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Internal server error'
    })
  }

})

// Create a GET route to get all players and attach their teams
router.get('/players', async (req, res) => {
  try {
    const players = await Player.findAll({
      include: Team
    })

    res.json(players)

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Internal server error'
    })
  }
})

// Create a Get route to get a single player by id and get thair assosiated team
router.get('/player/:id', async (req, res) => {

  try {
    const id = req.params.id
    const player = await Player.findByPk(id, {
      include: Team
    })

    if (!player) {
      return res.json({
        message: 'No player found with that id'
      })
    }

    res.json(player)

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Internal server error'
    })
  }
})

// Create a Get route to get a single team by id and get thair assosiated players
router.get('/team/:id', async (req, res) => {

  try {
    const id = req.params.id
    const team = await Team.findByPk(id, {
      include: {
        model: Player,
        attributes: {
          exclute: ['password']
        }
      } 
    })

    if (!team) {
      return res.json({
        message: 'No player found with that id'
      })
    }

    res.json(team)

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Internal server error'
    })
  }
})

// Create POST route to create a team
router.post('/add/team', async (req, res) => {
  try{
    const newTeam = req.body
    const addTeam = await Team.create(newTeam)

    res.json(addTeam)

  } catch(err) {
    handleValidationError(err, res)
  }
})
// Create a POST route to create a player
router.post('/add/player', async (req, res) => {
  try{
    const newPlayer = req.body
    const addPlayer = await Player.create(newPlayer)

    res.json(addPlayer)

  } catch(err) {
    handleValidationError(err, res)

  }
})


// Create a POST route to creatre a player - recieve req.body data with the required fields/columns

// Add try/catch to catch any sequelize errors that occur and send back a clean JSON error obj as we did in the team creation route

// Create a PUT route to update a players info - (they send an objest (req.body) that looks like {first_name: 'Billy} and you need to update that player's row in the table to now have a first name of 'Bill)
router.put('/update/player/:id', async (req, res) => {
  try{
    const id = req.params.id
    const updateFirstName = req.body.first_name
    const updateLastName = req.body.last_name
    const updateAge = req.body.age

    const  player = await Player.findByPk(id)
    if(!player) {
      return res.json({message: 'Player not found'})
    }

    const updatePlayer = await Player.update({
      first_name: updateFirstName,
      last_name: updateLastName,
      age: updateAge
    }, {
      where:{
        player_id: id
      }
    })

    res.json(updatePlayer)

  } catch(err) {
    handleValidationError(err, res)
  } 
})

router.put('/update/team/:id', async (req, res) => {
  try{
    const id = req.params.id
    const teamName = req.body.name

    const  team = await Player.findByPk(id)
    if(!team) {
      return res.json({message: 'Player not found'})
    }

    const updateTeam = await Player.update({
      name: teamName
    }, {
      where:{
        player_id: id
      }
    })

    res.json(updateTeam)

  } catch(err) {
    handleValidationError(err, res)
  } 
})

// Create a DELETE roiute to remove a PLAYER FROM A TABLE
// router.delete('/delete/player')
router.delete('/delete/player/:id', async (req, res) =>{
  try{
  const id = req.params.id
  const deletePlayer = await Player.destroy({
    where: {
      player_id: id
    }
  })

  res.json(deletePlayer)

  } catch(err) {
    handleValidationError(err,res)
  }
})

// DCreate a DELETE route to delete a team from the table

router.delete('/team/:id', async (req, res) => {
  try{
    const team = await Team.findByPk(id)

    if(team){
      await team.destroy()
      return res.json({
        message: 'Team deleted successfully'
      })
    }

    res.status(404).json({
      message: 'Team does not exist'
    })
  } catch(err) {
    handleValidationError(err,res)
  }
})

//  Create a POST route to connect a player with a team
router.post('/connect', async (req, res) => {
  const {player_id, team_id} = req.body
  try{
    const player = await Player.findByPk(player_id)
    const team = await Team.findByPk(team_id)

    if(!player || !team)
    return res.status(404).json({message: 'Player or Team not found'})

    await team.addPlayer(player)

    return res.json({message: 'Player assigned to Team successfully'})
  } catch(err){
    handleValidationError(err,res)
  }
})

// router.post('/connect', async (req,res)=> {
//   // user will return the input as json
//   const { team_id, player_id } = req.body
//   try{
//       //find the team
//       const team = await Team.findByPk(team_id)
//       if(!team){
//           return res.json({ message: 'Team not found'})
//       }
//       //find the player
//       const player = await Player.findByPk(player_id)
//       if(!player){
//           return res.json({message: 'Player not found'})
//       }
//       //connect
//       await team.addPlayer(player)
//       res.json({message: "player connected to the given team successfully"})
//   }catch(err){
//       console.error(err)
//       res.json({message: "Error"})
//   }
// })

module.exports = router