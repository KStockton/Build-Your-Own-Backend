## Get Started :

Make request to the base url:

#### ``` https://nbadraft2019.herokuapp.com/ ```

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

#### Post ```api/v1/teams/roster/:team_id```

The response sends all players that play on a specific team from the database.

Response from https://nbadraft2019.herokuapp.com/api/v1/teams/roster/denver_nuggets 
Example Response
