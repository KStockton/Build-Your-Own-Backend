const newPlayers = [ 
  {
   "name": "Alexander-Walker, Nickeil",
   "school": "Virginia Tech",
   "position": "SG",
    "id": "a"
  },
  { 
   "name": "Barrett, RJ",
   "school": "Duke",
   "position": "SF",
   "id": "b"
   },
  { 
    "name": "Bazley, Darius", 
    "school": "Princeton High School (OH)",
    "position": "PF",
    "id": "c"
  },
  { 
    "name": "Bitadze, Goga", 
    "school": "KK Mega Leks (Serbia)",
    "position": "C",
    "id": "d"
  },
  { "name": "Bol, Bol", 
    "school": "Oregon",
    "position": "C",
    "id": "e"
  },
  { 
    "name": "Bone, Jordan",
    "school": "Tennessee",
    "position": "SG",
    "id": "f"
  },
  { 
    "name": "Wright-Foreman, Justin",
    "school": "Hofstra",
    "position": "PG",
    "id": "g"
  },
  { 
    "name": "Porter Jr., Michael",
    "school": "Missouri",
    "position": "SF",
    "id": "h"
  },
  { 
    "name": "Brantley, Jarrell",
    "school": "College of Charleston",
    "position": "PF",
    "id": "i"
  },
  { 
    "name": "Brazdeikis, Ignas",
    "school": "Michigan",
    "position": "SF",
    "id": "j"
  },
  { 
    "name": "Hayes, Jaxson", 
    "school": "Texas",
    "position": "C",
    "id": "k"
  },
  { 
    "name": "Clarke, Brandon",
    "school": "Gonzaga",
    "position": "PF",
    "id": "l"
  },
  { 
    "name": "Claxton, Nicolas", 
    "school": "Georgia",
    "position": "C",
    "id": "m"
  },
  { 
    "name": "Culver, Jarrett",
    "school": "Texas Tech",
    "position": "SF",
    "id": "n"
  },
  { 
    "name": "Hernandez , Dewan",
    "school": "Miami",
    "position": "PF",
    "id": "o"
  },
  { 
    "name": "Herro, Tyler",
    "school": "Kentucky",
    "position": "SG",
    "id": "p"
  },
  { 
    "name": "Doumbouya, Sekou",
    "school": "Limoges (France)",
    "position": "SF",
    "id": "q"
  },
  { 
    "name": "Edwards, Carsen",
    "school": "Purdue",
    "position": "PG",
    "id": "r"
  },
  { 
    "name": "Horton-Tucker, Talen",
    "school": "Iowa State",
    "position": "SG",
    "id": "s"
  },
  { 
    "name": "Fernando, Bruno",
    "school": "Maryland",
    "position": "C",
    "id": "t"
  },
  { 
    "name": "Gafford, Daniel",
    "school": "Arkansas",
    "position": "PF",
    "id": "u"
  },
  { 
    "name": "Garland, Darius",
    "school": "Vanderbilt",
    "position": "PG",
    "id": "v"
  },
  { 
    "name": "Guy, Kyle",
    "school": "Virginia",
    "position": "SG",
    "id": "w"
  },
  { 
    "name": "Hachimura, Rui",
    "school": "Gonzaga",
    "position": "PF",
    "id": "x"
  },
  { 
    "name": "Hands, Jaylen",
    "school": "Texas",
    "position": "C",
    "id": "y"
  },
  { 
    "name": "Hunter, De'Andre", 
    "school": "Virginia",
    "position": "SF",
    "id": "z"
  },
  { 
    "name": "James, Justin", 
    "school": "Wyoming",
    "position": "SG",
    "id": "ab"
  },
  { 
    "name": "Jerome, Ty", 
    "school": "Virginia",
    "position": "PG",
    "id": "ac"
  },
  { 
    "name": "Johnson, Cameron", 
    "school": "North Carolina", 
    "position": "SF",
    "id": "ad"
  },
  { 
    "name": "Johnson, Keldon", 
    "school": "Kentucky",
    "position": "SF",
    "id": "ae"
  },
  { 
    "name": "Kabengele, Mfiondu", 
    "school": "Florida State",
    "position": "C",
    "id": "af"
  },
  { 
    "name": "Faried, Kenneth", 
    "school": "Morehead St",
    "position": "PF",
    "id": "ag"
  },
  { 
    "name": "Murray, Jamal", 
    "school": "Kentucky",
    "position": "SG",
    "id": "ah"
  },
  { 
    "name": "Langford, Romeo", 
    "school": "Indiana",
    "position": "SF",
    "id": "ai"
  },
  { 
    "name": "Harris, Gary", 
    "school": "Michigan State University",
    "position": "PF",
    "id": "aj"
  },
  { 
    "name": "Little, Nassir", 
    "school": "North Carolina",
    "position": "SF",
    "id": "ak"
  },
  { 
    "name": "Louzada Silva, Marcos", 
    "school": "SESI Franca (Brazil)",
    "position": "SG",
    "id": "al"
  },
  { 
    "name": "Mann, Terance", 
    "school": "Florida State",
    "position": "SG",
    "id": "am"
  },
  { 
    "name": "Marinkovic, Vanja", 
    "school": "Partizan Belgrade",
    "position": "SG",
    "id": "an"
  },
  { 
    "name": "Martin, Cody", 
    "school": "Nevada",
    "position": "SG",
    "id": "ao"
  },
  { 
    "name": "McDaniels, Jalen", 
    "school": "San Diego State",
    "position": "SF",
    "id": "ap"
  },
  { 
    "name": "Morant, Ja", 
    "school": "Murray State",
    "position": "PG",
    "id": "aq"
  },
  { 
    "name": "Nowell, Jaylen", 
    "school": "Washington",
    "position": "SG",
    "id": "ar"
  },
  { 
    "name": "Okeke, Chuma", 
    "school": "Auburn",
    "position": "PF",
    "id": "as"
  },
  { 
    "name": "Okpala, KZ", 
    "school": "Stanford",
    "position": "SF",
    "id": "at"
  },
  { 
    "name": "Oni, Miye", 
    "school": "Yale",
    "position": "SG",
    "id": "au"
  },
  { 
    "name": "Paschall, Eric", 
    "school": "Villanova",
    "position": "PF",
    "id": "av"
  },
  { 
    "name": "Poole, Jordan", 
    "school": "Michigan",
    "position": "SG",
    "id": "aw"
  },
  { 
    "name": "Porter Jr., Kevin", 
    "school": "USC",
    "position": "SG",
    "id": "ax"
  },
  { 
    "name": "Reddish, Cam", 
    "school": "Duke",
    "position": "SF",
    "id": "ay"
  },
  { 
    "name": "Roby, Isaiah", 
    "school": "Nebraska",
    "position": "PF",
    "id": "az"
  },
  { 
    "name": "Samanic, Luka", 
    "school": "KK Olimpija (Slovenia)",
    "position": "PF",
    "id": "ba"
  },
  { 
    "name": "Schofield, Admiral", 
    "school": "Tennessee",
    "position": "SF",
    "id": "bc"
  },
  { 
    "name": "Shayok, Marial", 
    "school": "Iowa State",
    "position": "SG",
    "id": "bd"
  },
  { 
    "name": "Sirvydis, Deividas", 
    "school": "Vilnius Rytas (Lithuania)",
    "position": "SF",
    "id": "be"
  },
  { 
    "name": "Smailagic, Alen", 
    "school": "Santa Cruz Warriors (NBA G League)",
    "position": "PF",
    "id": "bf"
  },
  { 
    "name": "Thybulle, Matisse", 
    "school": "Washington",
    "position": "SF",
    "id": "bg"
  },
  { 
    "name": "Washington, PJ", 
    "school": "Kentucky",
    "position": "SF",
    "id": "bh"
  },
  { 
    "name": "Waters, Tremont", 
    "school": "LSU",
    "position": "PF",
    "id": "bi"
  },
  { 
    "name": "Weatherspoon, Quinndary", 
    "school": "Missouri State",
    "position": "SG",
    "id": "bj"
  },
  { 
    "name": "White, Coby", 
    "school": "North Carolina",
    "position": "PG",
    "id": "bk"
  },
  { 
    "name": "Williams, Grant", 
    "school": "Tennessee",
    "position": "SF",
    "id": "bl"
  },
  { 
    "name": "Williamson, Zion", 
    "school": "Duke",
    "position": "PF",
    "id": "bm"
  },
  { 
    "name": "Windler, Dylan", 
    "school": "Belmont",
    "position": "SF",
    "id": "bn"
  },

  ]

  export const positions = [
    'PG',
    'SG',
    'SF',
    'PF',
    'C'
  ]

  export const teams = [
  {
    "team": "Atlanta Hawks",
    "players": [ "k", "al", "ay" ],
    "id": 1  
  },
  {
    "team": "Boston Celtics",
    "players": [ "ai", "bg", "bi", "bl" ],
    "id": 2  
  },
  {
    "team": "Brooklyn Nets",
    "players": [ "a", "m", "af" ],
    "id": 3  
  },
  {
    "team": "Charlotte Hornets",
    "players": [ "ao", "ap", "bh"],
    "id": 4  
  },
  {
    "team": "Chicago Bulls",
    "players": [ "u", "bk" ],
    "id": 5  
  },
  {
    "team": "Cleveland Cavaliers",
    "players": [ "v", "bn" ],
    "id": 6  
  },
  {
    "team": "Dallas Mavericks",
    "players": [ "be" ],
    "id": 7  
  },
  {
    "team": "Denver Nuggets",
    "players": [ "h", "ah", "aj"],
    "id": 8  
  },
  {
    "team": "Detroit Pistons",
    "players": [ "q", "az" ],
    "id": 9  
  },
  {
    "team": "Golden State Warriors",
    "players": [ "au", "av", "aw" ],
    "id": 10  
  },
  {
    "team": "Houston Rockets",
    "players": [ "ag"],
    "id": 11  
  },
  {
    "team": "Indiana Pacers",
    "players": [ "d", "i" ],
    "id": 12  
  },
  {
    "team": "Los Angeles Clippers",
    "players": [ "y", "am" ],
    "id": 13  
  },
  {
    "team": "Los Angeles Lakers",
    "players": [ "z"],
    "id": 14  
  },
  {
    "team": "Memphis Grizzlies",
    "players": [ "aq" ],
    "id": 15  
  },
  {
    "team": "Miami Heat",
    "players": [ "e", "p" ],
    "id": 16 
  },
  {
    "team": "Milwaukee Bucks",
    "players": [ "ax" ],
    "id": 17  
  },
  {
    "team": "Minnesota Timberwolves",
    "players": [ "ad", "ar" ],
    "id": 18
  },
  {
    "team": "New Orleans Pelicans",
    "players": [ "f", "bf", "bm" ],
    "id": 19
  },
  {
    "team": "New York Knicks",
    "players": [ "b", "w" ],
    "id": 20 
  },
  {
    "team": "Oklahoma City Thunder",
    "players": [ "l" ],
    "id": 21 
  },
  {
    "team": "Orlando Magic",
    "players": [ "s", "as" ],
    "id": 22  
  },
  {
    "team": "Philadelphia 76ers",
    "players": [ "r", "t", "ac", "bc", "bd" ],
    "id": 23  
  },
  {
    "team": "Phoenix Suns",
    "players": [ "at" ],
    "id": 24 
  },
  {
    "team": "Portland Trail Blazers",
    "players": [ "ak" ],
    "id": 25 
  },
  {
    "team": "Sacramento Kings",
    "players": [ "j", "ab", "an" ],
    "id": 26
  },
  {
    "team": "San Antonio Spurs",
    "players": [ "ae", "ba", "bj" ],
    "id": 27  
  },
  {
    "team": "Toronto Raptors",
    "players": [ "o" ],
    "id": 28  
  },
  {
    "team": "Washington Wizards",
    "players": [ "x" ],
    "id": 29  
  },
  {
    "team": "Utah Jazz",
    "players": [ "c", "g" ],
    "id": 30 
  }]
  