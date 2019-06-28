const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration);
const express = require('express')
const app = express();
const port = process.env.PORT || 3000

app.use(express.json())


app.get('/api/v1/teams', (request, response) => {
  database('teams').select()
    .then((teams) => {
      response.status(200).json(teams)
    })
    .catch((error) => {
      response.status(500).json({error})
    })
});

app.get('/api/v1/players', (request, response) => {
  database('players').select()
    .then((players) => {
      response.status(200).json(players)
    })
    .catch((error) => {
      response.status(500).json({error})
    })
});

app.get('/api/v1/teams/:id', (request, response) => {
  const { id } = request.params

  database('teams').where('id', id).select()
   .then(teams => {
    if(teams.length) response.status(200).json(teams)
    if(!teams.length) response.status(404).json(`Team not found with ${id}`)
  })
})

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

app.get('/api/v1/team/roster/:team_id', (request, response) => {
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

app.post('/api/v1/player', (request, response) => {
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
})

// This will put the player name in the correct format in the database

// let result = name.split(' ').reverse()
// let databaseName = result.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ')

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

app.delete('/api/v1/teams', (request, response) => {
  const idInfo = request.body
  let teamId = parseInt(idInfo.id)

  for(let requiredParameter of ['id']){
    
    if(!idInfo[requiredParameter])
      return response
        .status(422)
        .send({error: `Expected format: { id : <Number> } Please include ${requiredParameter}`})
  }
  database('teams').where('id', teamId)
    .delete()
    return response.status(200).json('Success team has been removed')
});

app.listen(3000, () => {
  console.log(`App is running 👻 on port ${port}`)
})