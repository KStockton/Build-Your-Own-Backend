const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration);
const express = require('express')
const app = express();
const port = 3000

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

app.get('/api/v1/players/:id',(request, response) => {
  const { id } = request.params
  console.log(id, 'id')
  database('players').select()
    .then((players) => {
      let findPlayer = players.find(player => player.id == id)
      if(!findPlayer) response.status(404).json(`Player not found with ${id}`)
      response.status(200).json(findPlayer)
    })
    .catch((error) => {
      response.status(500).json({error})
    })
});






















app.listen(3000, () => {
  console.log(`App is running 👻 on port ${port}`)
})