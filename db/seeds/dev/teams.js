const nbaTeams = require('../../../data.js')

const createPlayers = (knex, player) => {
  return knex('players').insert(player)
}

const createTeams = (knex, team) => {
  
  return knex('teams').insert({
    team: team.team,
    conference: team.conference
  }, 'id')
  .then(teamId => {
    const playerPromises = [];
    
    team.players.forEach(player => {
      playerPromises.push(
        createPlayers(knex, {
          name: player.name,
          school: player.school,
          position: player.position,
          team_id: teamId[0]
        })
        )
      });
      return Promise.all(playerPromises);
    })
  }
  
exports.seed = function(knex, Promise) {

  return knex('players').del() // delete players first
    .then(() => knex('teams').del()) // then delete teams
    .then(() => {
      let teamPromises = [];

      nbaTeams.forEach(team => {
        teamPromises.push(createTeams(knex, team));
      });

      return Promise.all(teamPromises)
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
  };
   