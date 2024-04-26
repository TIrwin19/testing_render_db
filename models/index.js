const Player = require('./player')
const Team = require('./team')

// Many to many
Team.belongsToMany(Player, {through: 'team_player'})
Player.belongsToMany(Team, {through: 'team_player'})

module.exports = {
  Team: Team,
  Player: Player
}