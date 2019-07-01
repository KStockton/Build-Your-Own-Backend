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

#### Get ```api/v1/teams/roster/:team_id```

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

#### Post ```api/v1/teams``` Create a new Team

The user can post a new NBA team to the database. Below is the required parameters. Must be formated to JSON,

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

Response from https://nbadraft2019.herokuapp.com/api/v1/teams 

```
{
    "id": 34
}
```

### Delete ```/api/v1/teams```

A user can delete a specific team and associated players