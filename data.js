const teams = [
  {    
    team: "Atlanta Hawks",
    conference: "Eastern",
    players: [
    { 
      name: "Hayes, Jaxson", 
      school: "Texas",
      position: "C"
    }, 
    { 
      name: "Louzada Silva, Marcos", 
      school: "SESI Franca (Brazil)",
      position: "SG"
    }, 
    { 
      name: "Reddish, Cam", 
      school: "Duke",
      position: "SF"
    }]
  },
  {    team: "Boston Celtics",
    conference: "Eastern",
    players: [
    { 
      name: "Langford, Romeo", 
      school: "Indiana",
      position: "SF"
    }, 
    { 
      name: "Thybulle, Matisse", 
      school: "Washington",
      position: "SF"
    }, 
    { 
      name: "Waters, Tremont", 
      school: "LSU",
      position: "PF"
    }, 
    { 
      name: "Williams, Grant", 
      school: "Tennessee",
      position: "SF"
    }]
  },
  {    team: "Brooklyn Nets",
    conference: "Eastern",
    players: [
    {
      name: "Alexander-Walker, Nickeil",
      school: "Virginia Tech",
      position: "SG"
    }, 
    { 
      name: "Claxton, Nicolas", 
      school: "Georgia",
      position: "C"
    }, 
    { 
      name: "Kabengele, Mfiondu", 
      school: "Florida State",
      position: "C"
    }]
  },
  {    team: "Charlotte Hornets",
    conference: "Eastern",
    players: [
    { 
      name: "Martin, Cody", 
      school: "Nevada",
      position: "SG"
    }, 
    { 
      name: "McDaniels, Jalen", 
      school: "San Diego State",
      position: "SF"
    }, 
    { 
      name: "Washington, PJ", 
      school: "Kentucky",
      position: "SF"
    }]
  },
  {    team: "Chicago Bulls",
    conference: "Eastern",
    players: [
    { 
      name: "Gafford, Daniel",
      school: "Arkansas",
      position: "PF"
    }, 
    { 
      name: "White, Coby", 
      school: "North Carolina",
      position: "PG"
    }]
  },
  {    team: "Cleveland Cavaliers",
    conference: "Eastern",
    players: [
    { 
      name: "Garland, Darius",
      school: "Vanderbilt",
      position: "PG"
    }, 
    { 
      name: "Windler, Dylan", 
      school: "Belmont",
      position: "SF"
    }]
  },
  {    team: "Dallas Mavericks",
    conference: "Western",
    players: [
    { 
      name: "Sirvydis, Deividas", 
      school: "Vilnius Rytas (Lithuania)",
      position: "SF"
    }]
  },
  {    team: "Denver Nuggets",
    conference: "Western",
    players: [
    { 
      name: "Porter Jr., Michael",
      school: "Missouri",
      position: "SF"
    }, 
    { 
      name: "Murray, Jamal", 
      school: "Kentucky",
      position: "SG"
    }, 
    { 
      name: "Harris, Gary", 
      school: "Michigan State University",
      position: "PF"
    }]
  },
  {    team: "Detroit Pistons",
    conference: "Eastern",
    players: [
    { 
      name: "Doumbouya, Sekou",
      school: "Limoges (France)",
      position: "SF"
    }, 
    { 
      name: "Roby, Isaiah", 
      school: "Nebraska",
      position: "PF"
    }]
  },
  {
    team: "Golden State Warriors",
    conference: "Western",
    players: [
    { 
      name: "Oni, Miye", 
      school: "Yale",
      position: "SG"
    }, 
    { 
      name: "Paschall, Eric", 
      school: "Villanova",
      position: "PF"
    }, 
    { 
      name: "Poole, Jordan", 
      school: "Michigan",
      position: "SG"
    }]
  },
  {
    team: "Houston Rockets",
    conference: "Western",
    players: [
    { 
      name: "Faried, Kenneth", 
      school: "Morehead St",
      position: "PF"
    }]
  },
  {
    team: "Indiana Pacers",
    conference: "Eastern",
    players: [
    { 
      name: "Bitadze, Goga", 
      school: "KK Mega Leks (Serbia)",
      position: "C"
    }, 
    { 
      name: "Brantley, Jarrell",
      school: "College of Charleston",
      position: "PF"
    }]
  },
  {
    team: "Los Angeles Clippers",
    conference: "Western",
    players: [
    { 
      name: "Hands, Jaylen",
      school: "Texas",
      position: "C"
    }, 
    { 
      name: "Mann, Terance", 
      school: "Florida State",
      position: "SG"
    }]
  },
  {
    team: "Los Angeles Lakers",
    conference: "Western",
    players: [
    { 
      name: "Hunter, De'Andre", 
      school: "Virginia",
      position: "SF"
    }]
  },
  {
    team: "Memphis Grizzlies",
    conference: "Western",
    players: [
    { 
      name: "Morant, Ja", 
      school: "Murray State",
      position: "PG"
    }]
  },
  {
    team: "Miami Heat",
    conference: "Eastern",
    players: [
  { 
    name: "Bol, Bol", 
    school: "Oregon",
    position: "C"
  }, 
  { 
    name: "Herro, Tyler",
    school: "Kentucky",
    position: "SG",
  }]
  },
  {
    team: "Milwaukee Bucks",
    conference: "Eastern",
    players: [
    { 
      name: "Porter Jr., Kevin", 
      school: "USC",
      position: "SG"
    }]
  },
  {
    team: "Minnesota Timberwolves",
    conference: "Western",
    players: [
    { 
      name: "Johnson, Cameron", 
      school: "North Carolina", 
      position: "SF"
    }, 
    { 
      name: "Nowell, Jaylen", 
      school: "Washington",
      position: "SG"
    }]
  },
  {
    team: "New Orleans Pelicans",
    conference: "Western",
    players: [
    { 
      name: "Bone, Jordan",
      school: "Tennessee",
      position: "SG"
    }, 
    { 
      name: "Smailagic, Alen", 
      school: "Santa Cruz Warriors (NBA G League)",
      position: "PF"
    }, 
    { 
      name: "Williamson, Zion", 
      school: "Duke",
      position: "PF"
    }]
  },
  {
    team: "New York Knicks",
    conference: "Eastern",
    players: [
    { 
      name: "Barrett, RJ",
      school: "Duke",
      position: "SF"
    }, 
    { 
      name: "Guy, Kyle",
      school: "Virginia",
      position: "SG"
    }]
  },
  {
    team: "Oklahoma City Thunder",
    conference: "Western",
    players: [
    { 
      name: "Clarke, Brandon",
      school: "Gonzaga",
      position: "PF"
    }]
  },
  {
    team: "Orlando Magic",
    conference: "Eastern",
    players: [
    { 
      name: "Horton-Tucker, Talen",
      school: "Iowa State",
      position: "SG"
    }, 
    { 
      name: "Okeke, Chuma", 
      school: "Auburn",
      position: "PF"
    }]
  },
  {
    team: "Philadelphia 76ers",
    conference: "Eastern",
    players: [
    { 
      name: "Edwards, Carsen",
      school: "Purdue",
      position: "PG"
    }, 
    { 
      name: "Fernando, Bruno",
      school: "Maryland",
      position: "C"
    }, 
    { 
      name: "Jerome, Ty", 
      school: "Virginia",
      position: "PG"
    }, 
    { 
      name: "Schofield, Admiral", 
      school: "Tennessee",
      position: "SF"
    }, 
    { 
      name: "Shayok, Marial", 
      school: "Iowa State",
      position: "SG"
    }],
  },
  {
    team: "Phoenix Suns",
    conference: "Western",
    players: [
    { 
      name: "Okpala, KZ", 
      school: "Stanford",
      position: "SF"
    }]
  },
  {
    team: "Portland Trail Blazers",
    conference: "Western",
    players: [
    { 
      name: "Little, Nassir", 
      school: "North Carolina",
      position: "SF"
    }]
  },
  {
    team: "Sacramento Kings",
    conference: "Western",
    players: [
    { 
      name: "Brazdeikis, Ignas",
      school: "Michigan",
      position: "SF"
    }, 
    { 
      name: "James, Justin", 
      school: "Wyoming",
      position: "SG"
    }, 
    { 
      name: "Marinkovic, Vanja", 
      school: "Partizan Belgrade",
      position: "SG"
    }]
  },
  {
    team: "San Antonio Spurs",
    conference: "Western",
    players: [
    { 
      name: "Johnson, Keldon", 
      school: "Kentucky",
      position: "SF"
    }, 
    { 
      name: "Samanic, Luka", 
      school: "KK Olimpija (Slovenia)",
      position: "PF"
    }, 
    { 
      name: "Weatherspoon, Quinndary", 
      school: "Missouri State",
      position: "SG"
    }]
  },
  {
    team: "Toronto Raptors",
    conference: "Eastern",
    players: [
    { 
      name: "Hernandez , Dewan",
      school: "Miami",
      position: "PF"
    }]
  },
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

module.exports = teams  