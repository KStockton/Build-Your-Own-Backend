const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration);
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

// Get all teams
app.get('/api/v1/teams', (request, response) => {
  database('teams').select()// select team database
    .then((teams) => {
      response.status(200).json(teams)
    })
    .catch((error) => { // if an error is generated it will be catched
      response.status(500).json({error})
    })
});

// Get all players
app.get('/api/v1/players', (request, response) => {
  database('players').select() // selects players table from database
    .then((players) => { // all the objects are given a players name declaration
      response.status(200).json(players) // the response is returned with a status 200 and all the objects are returned 
    })
    .catch((error) => { // if an error is generated it will be catched
      response.status(500).json({error}) // the error with status 500 is returned along with the error
    })
});
// Get a specific team
app.get('/api/v1/teams/:id', (request, response) => {
  const { id } = request.params

  database('teams').where('id', id).select()
   .then(teams => {
    if(teams.length) response.status(200).json(teams)
    if(!teams.length) response.status(404).json(`Team not found with ${id}`)
  })
})
// Get a specific player
app.get('/api/v1/players/:id',(request, response) => {
  const { id } = request.params

  database('players').where('id', id).select()
    .then(players => {
      if(players.length) response.status(200).json(players)
      if(!players.length) response.status(404).json(`Player not found with ${id}`)
    })
    .catch((error) => {
      response.status(500).json({error})
    })
});
// Get the team roster
app.get('/api/v1/teams/roster/:team_id', (request, response) => {
  const { team_id } = request.params
  
  let words = team_id.toLowerCase().split('_')

   let result = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
   }).join(' ')
  
   database('teams').where('team', result).select()
    .then(teams => {
      if(teams.length){
        let nbaTeamId = teams[0].id
        
        database('players').where('team_id', nbaTeamId).select()
          .then(players => {
            if(players.length) response.status(200).json(players)
            if(!players.length) response.status(404).json(`No Roster Found on ${team_id}`)
        })
      }
    })
    .catch((error) => {
      response.status(500).json(error)
    } )
})
// Post a new player
app.post('/api/v1/players', (request, response) => {
  const player = request.body
  let teamId

  for( let requiredParameter of ['team', 'school', 'position', 'name']) {

  if(!player[requiredParameter]) 
    return response
      .status(422)
      .send({error: `Expected format: { team: <String>, school: <String>, position: <String>, name: <String> }. 
        Please include "${requiredParameter}" key.`})
 }
  database('teams').where('team', player.team).select()
    .then(teams => {
      if(teams.length) 
        teamId = teams[0].id

      let newPlayer = { 
        name: player.name,
        school: player.school,
        position: player.position,
        team_id: teamId
       }
      database('players').insert(newPlayer, 'id')
        .then(player => {
          return response.status(201).json({id: player[0] })
        })
        .catch((error) => {
          response.status(500).json(error)
        })
    })
});

// This will put the player name in the correct format in the database

// let result = name.split(' ').reverse()
// let databaseName = result.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ')

// Post a new team
app.post('/api/v1/teams', (request, response) => {
  const teamInfo = request.body
  for(let requiredParameter of ['team', 'conference']){

    if(!teamInfo[requiredParameter])
      return response
        .status(422)
        .send({error: `Expected format: { team : <String> , conference: <String> } 
        Please include ${requiredParameter}`})
  }
  database('teams').insert(teamInfo, 'id')
    .then(team => {
      return response.status(201).json({ id: team[0]})
    })
    .catch(error => {
      return response.status(500).json(error)
    })
});
// Delete team and all associated players
app.delete('/api/v1/teams', (request, response) => {
  const idInfo = request.body
  let teamId = parseInt(idInfo.id)
  console.log(teamId)
  for(let requiredParameter of ['id']){
    if(!idInfo[requiredParameter])
      return response
        .status(422)
        .send({error: `Expected format: { id : <Number> } Please include ${requiredParameter}`})
  }
  database('players').where({team_id: teamId}).del()
  .then(nbaTeamId => {
    if(nbaTeamId > 0) {
      database('teams').where({id: teamId}).del()
      .then(id => {
        return response.status(202).json('Success team has been removed')
      })
      } else {
        return response.status(404).json(`No team found with ${teamId}`)
      }
    })
  .catch(error => {
    return response.status(500).json({error})
  })
});

app.listen(PORT, () => {
  console.log(`App is running 👻 on port ${PORT}`)
});