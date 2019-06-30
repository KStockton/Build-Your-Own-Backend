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

| Name | Type | Description |
| ------------------------- |
| id | <Integer> | Unique ID for each team or player |
| team | <String> | Name of the team |
| player | <String> | Name of the player |

