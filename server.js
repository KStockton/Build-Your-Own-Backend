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
      response.status(200).json(teams) // returns a status ok and the teams in the database
    })
    .catch((error) => { // if an error is generated it will be catched and returned with Internal server error
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
      response.status(500).json({error}) // if an error is generated it will be catched and returned with Internal server error
    })
});
// Get a specific team
app.get('/api/v1/teams/:id', (request, response) => {
  const { id } = request.params

  database('teams').where('id', id).select()
   .then(teams => {
    if(teams.length) response.status(200).json(teams) // The 
    if(!teams.length) response.status(404).json(`Team not found with ${id}`)
  })
  .catch((error) => { // if an error is generated it will be catched
    response.status(500).json({error}) // if an error is generated it will be catched and returned with Internal server error
  })
})
// Get a specific player
app.get('/api/v1/players/:id',(request, response) => {
  // get method for a specific player using request params
  const { id } = request.params

  database('players').where('id', id).select() // selecting the player database and finding the player with matching id
    .then(players => {
      if(players.length) response.status(200).json(players) // if truthy return a response status ok
      if(!players.length) response.status(404).json(`Player not found with ${id}`) // if falsy return 404 player not found with params
    })
    .catch((error) => {
      response.status(500).json({error}) // if an error is generated it will be catched and returned with Internal server error
    })
});
// Get the team roster
app.get('/api/v1/teams/roster/:team_id', (request, response) => {
  const { team_id } = request.params
  // get all players on a particular teams roster with params
  let words = team_id.toLowerCase().split('_') // splits team name at _

   let result = words.map(word => { // maps over array of team words
    return word.charAt(0).toUpperCase() + word.slice(1) // uppercase the first letter of team name 
   }).join(' ') // join array back to a string
  
   database('teams').where('team', result).select() // locate the team with the same name
    .then(teams => {
      if(teams.length){
        let nbaTeamId = teams[0].id // if truthy grab the id of the team
        
        database('players').where('team_id', nbaTeamId).select() // select the database of the players that match the team id
          .then(players => {
            if(players.length) response.status(200).json(players) // if truthy return the players that match the associated foriegn key
            if(!players.length) response.status(404).json(`No Roster Found on ${team_id}`) // if false return a status 404 player with team id not found
        }) 
      } else {
        return response.status(404).json(`No team found with ${team_id}`) // return no team found with team_id params
      }
    })
    .catch((error) => {
      response.status(500).json(error) // if an error is generated it will be catched and returned with Internal server error
    } )
})
// Post a new player
app.post('/api/v1/players', (request, response) => {
  // post a new player to a specific team
  const player = request.body
  let teamId

  for( let requiredParameter of ['team', 'school', 'position', 'name']) { 

  if(!player[requiredParameter]) // checks to see if request body has correct params keys
    return response
      .status(422) 
      .send({error: `Expected format: { team: <String>, school: <String>, position: <String>, name: <String> }. 
        Please include "${requiredParameter}" key.`}) // if keys are missing in the request body it will indicate what is missing
 }
  database('teams').where('team', player.team).select() // Selects the name of team the player is signed too.
    .then(teams => {
      if(teams.length) 
        teamId = teams[0].id
      // if truthy it will save the foriegn key/ team_id associated to the new players team
      let newPlayer = { 
        name: player.name,
        school: player.school,
        position: player.position,
        team_id: teamId
       } // will create formate all the info for the player table 

      database('players').insert(newPlayer, 'id') // will insert the new player info into the player table
        .then(player => {
          return response.status(201).json({id: player[0] }) // will return a response with the id and created status code
        })
        .catch((error) => {
          response.status(500).json(error) // if an error is generated it will be catched and returned with Internal server error
        })
    })
});

// This will put the player name in the correct format in the database

// let result = name.split(' ').reverse()
// let databaseName = result.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ')

// Post a new team
app.post('/api/v1/teams', (request, response) => {
  // post a new team to the team database
  const teamInfo = request.body
  for(let requiredParameter of ['team', 'conference']){

    if(!teamInfo[requiredParameter]) // will check to see if key params are correct
      return response
        .status(422)
        .send({error: `Expected format: { team : <String> , conference: <String> } 
        Please include ${requiredParameter}`})// if falsy the error will indicate what is missing from the request body
  }
  database('teams').insert(teamInfo, 'id') // will insert the request body into the teams database
    .then(team => {
      return response.status(201).json({ id: team[0]}) // will return a response created along with the team id
    })
    .catch(error => {
      return response.status(500).json(error) // if an error is generated it will be catched and returned with Internal server error
    })
});
// Delete team and all associated players
app.delete('/api/v1/teams', (request, response) => {
  const idInfo = request.body
  let teamId = parseInt(idInfo.id)
  for(let requiredParameter of ['id']){
    if(!idInfo[requiredParameter])// checks to makesure all the required parameters are in the request body
      return response
        .status(422)
        .send({error: `Expected format: { id : <Number> } Please include ${requiredParameter}`})
  } // if params are missing the 422 status will send along with what the expected format should be in this method
  database('players').where({team_id: teamId}).del() // will first select the players table and find players that match request.body and remove them
  .then(nbaTeamId => {
    if(nbaTeamId > 0) {
      database('teams').where({id: teamId}).del() // if truthy and a team  exist with id then find and remove
      .then(id => {
        return response.status(202).json(`Success team ${id} has been removed`) // if truthy response 202 and succes messsage
      })
      } else {
        return response.status(404).json(`No team found with ${teamId}`) // if falsey return status 404 and team not found
      }
    })
  .catch(error => {
    return response.status(500).json({error}) // if an error is generated it will be catched and returned with Internal server error
  })
});

app.listen(PORT, () => {
  console.log(`App is running 👻 on port ${PORT}`)
});