## Welcome 
NBA Draft 2019 is a Backend Repository that included building a RESTful API for a large dataset, creating a one-to-many relational database schema design, and deploying the project to Heroku.

## Get Started : 

Make request to the base url:

#### View the app [here](https://nbadraft2019.herokuapp.com/)

## Teams

#### Get ```api/v1/teams``` (All Teams)

The response sends all the teams from database. 

Response example:

```  
[ 
  {
    team: "Washington Wizards",
    conference: "Eastern",
    players: [
    { 
      name: "Hachimura, Rui",
      school: "Gonzaga",
      position: "PF"
    }]
  },
  {
    team: "Utah Jazz",
    conference: "Western",
    players: [
    { 
      name: "Bazley, Darius", 
      school: "Princeton High School (OH)",
      position: "PF"
    }, 
    { 
      name: "Wright-Foreman, Justin",
      school: "Hofstra",
      position: "PG"
    }]
  }
] 
```

| Name | Type | Description |
| ---- |:----:|:-----------:|
| id | Integer | Unique ID for each team or player |
| team | String | Name of the team |
| conference | String | Name of the team conference |

#### Get ```api/v1/teams/:id``` (Single Team Request)

The response sends a single team from the database that matches the parameter.

Response from https://nbadraft2019.herokuapp.com/api/v1/teams/1 
Example Response

```
[
    {
        "id": 1,
        "team": "Atlanta Hawks",
        "conference": "Eastern",
        "created_at": "2019-06-28T16:40:09.469Z",
        "updated_at": "2019-06-28T16:40:09.469Z"
    }
]
```

#### Get ```api/v1/teams/roster/:team_id``` (Get team roster)

The response sends all drafted players that play on a specific team from the database.

Response from https://nbadraft2019.herokuapp.com/api/v1/teams/roster/utah_jazz 
Example Response
```
[
    {
        "id": 62,
        "team_id": 30,
        "name": "Bazley, Darius",
        "school": "Princeton High School (OH)",
        "position": "PF",
        "true": null
    },
    {
        "id": 63,
        "team_id": 30,
        "name": "Wright-Foreman, Justin",
        "school": "Hofstra",
        "position": "PG",
        "true": null
    }
]
```

#### Post ```api/v1/teams``` (Create a new Team)

The user can post a new NBA team to the database. Below is the required parameters. Must be formated in JSON,

| Name | Type | Description |
| ---- |:----:|:-----------:|
| team | String | Name of the team |
| conference | String | Name of the team conference |

Post example:
```
{ 
	"team": "Seattle Supersonics",
	"conference": "Western"
}
```

Response example from https://nbadraft2019.herokuapp.com/api/v1/teams 

```
{
    "id": 34
}
```

### Delete ```/api/v1/teams``` Delete a specific team and its players

A user can delete a specific team and associated players

Response from https://nbadraft2019.herokuapp.com/api/v1/teams 
```Success team has been removed```

## Players

### Get ```/api/v1/players``` Get all the players in the database

Each player has the following parameters: id, school, position and team_id.

| Name | Type | Description |
| ---- |:----:|:-----------:|
| id | Integer | Unique ID for each player |
| team_id | Integer | Id associated with the players team |
| name | String | Name of the player |
| school | String | School the player attended |
| position | String | Postion the player plays in the NBA |

Response example from https://nbadraft2019.herokuapp.com/api/v1/players 

```
[
  {
    id: 1,
    team_id: 1,
    name: "Hayes, Jaxson",
    school: "Texas",
    position: "C",
    true: null
  },
  {
    id: 2,
    team_id: 1,
    name: "Louzada Silva, Marcos",
    school: "SESI Franca (Brazil)",
    position: "SG",
    true: null
  }
]
```

### Get ```/api/v1/players/:id``` Get a specific player

The response will send a specific player that matches the id parameter in the request.

Response example from https://nbadraft2019.herokuapp.com/api/v1/players/42

```
[
  {
    id: 42,
    team_id: 20,
    name: "Williamson, Zion",
    school: "Duke",
    position: "PF",
    true: null
  }
]
```

### Post ```/api/v1/players/``` Add a new player

A user can add a new player and connect the player to his team.
The request requires the players name, team name, school and position.
See below for more information.

| Name | Type | Description |
| ---- |:----:|:-----------:|
| team | String | First and Last team name ie Seattle_Supersonics |
| name | String | Name of the player |
| school | String | School the player attended |
| position | String | Postion the player plays in the NBA |

Example post request 
```
{
    "team": "Seattle Supersonics",
    "name":"Jon Doe",
    "position": "C",
    "school": "Miami University"
}
```

Response from  https://nbadraft2019.herokuapp.com/api/v1/players

``` 
{
 "id": 66
}
```

## Contributors

#### Michael King-Stockton