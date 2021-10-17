/*
A la hora de buscar podremos utilizar el comando .find() + el campo que nos interese o
utilizar diferentes operadores
$gt: Un valor mayor al que se especifica: Tiene que ser un numero
$eq: Un valor igual al que se especifica: Puede ser un numero o un string
$lt: Un valor menor al que se especifica: Tiene que ser un numero
$gte: Un valor mayor o igual al que se especifica: Tiene que ser un numero
&lte: Un valor menor o igual al que se especifica: Tiene que ser un numero
*/


//Nos muestra todos los jugadores con sus campos en una vista bonita

db.playersList.find().pretty()
/*
{
    _id: ObjectId("616c4a2506e31fc426da6cbc"),
    nickName: 'M0nkey M00n',
    rgn: { Server: 'Europe', Country: 'France' },
    nat: 'French',
    team: 'BDS',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 108, deadZone: 0.07, Sensitivity: 4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbd"),
    nickName: 'Marc_by_8',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Spanish',
    team: 'BDS',
    age: 20,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.07, Sensitivity: 1.45 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbe"),
    nickName: 'Itachi',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Moroccan',
    team: 'KarmineCorp',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.45 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbf"),
    nickName: 'Joreuz',
    rgn: { Server: 'Europe', Country: 'Nederlands' },
    nat: 'Dutch',
    team: 'Dignitas',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.8 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc0"),
    nickName: 'Archie',
    rgn: { Server: 'Europe', Country: 'England' },
    nat: 'English',
    team: 'SEMPER',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.5 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc1"),
    nickName: 'DmentZa',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Spanish',
    team: 'GiantsGaming',
    age: 19,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 4.1 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc2"),
    nickName: 'Sypical',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'SSG',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.3 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc3"),
    nickName: 'Reysbull',
    rgn: { Server: 'NorthAmerica', Country: 'Mexico' },
    nat: 'Chilean',
    team: 'True Neutral',
    age: 17,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 2.05 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc4"),
    nickName: 'Taroco',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'Canadian',
    team: 'Rogue',
    age: 18,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.13, Sensitivity: 2.1 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc5"),
    nickName: 'Majicbear',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'Torrent',
    age: 16,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.2, Sensitivity: 2.85 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc6"),
    nickName: 'BeastMode',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'Rebellion',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.25, Sensitivity: 2.4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc7"),
    nickName: 'Firstkiller',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'FazeClan',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 109, deadzone: 0.05, Sensitivity: 1.2 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc8"),
    nickName: 'Express',
    rgn: { Server: 'Oceania', Country: 'Australia' },
    nat: 'Australian',
    team: 'GroundZero',
    age: 23,
    controller: 'XBOX',
    Setting: { cameraFov: 105, deadzone: 0.15, Sensitivity: 1.4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc9"),
    nickName: 'CJCJ',
    rgn: { Server: 'Oceania', Country: 'Australia' },
    nat: 'Australian',
    team: 'Renagades',
    age: 20,

OnlineVideogame> db.playersList.find().pretty()
[
  {
    _id: ObjectId("616c4a2506e31fc426da6cbc"),
    nickName: 'M0nkey M00n',
    rgn: { Server: 'Europe', Country: 'France' },
    nat: 'French',
    team: 'BDS',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 108, deadZone: 0.07, Sensitivity: 4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbd"),
    nickName: 'Marc_by_8',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Spanish',
    team: 'BDS',
    age: 20,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.07, Sensitivity: 1.45 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbe"),
    nickName: 'Itachi',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Moroccan',
    team: 'KarmineCorp',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.45 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbf"),
    nickName: 'Joreuz',
    rgn: { Server: 'Europe', Country: 'Nederlands' },
    nat: 'Dutch',
    team: 'Dignitas',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.8 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc0"),
    nickName: 'Archie',
    rgn: { Server: 'Europe', Country: 'England' },
    nat: 'English',
    team: 'SEMPER',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.5 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc1"),
    nickName: 'DmentZa',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Spanish',
    team: 'GiantsGaming',
    age: 19,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 4.1 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc2"),
    nickName: 'Sypical',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'SSG',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.3 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc3"),
    nickName: 'Reysbull',
    rgn: { Server: 'NorthAmerica', Country: 'Mexico' },
    nat: 'Chilean',
    team: 'True Neutral',
    age: 17,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 2.05 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc4"),
    nickName: 'Taroco',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'Canadian',
    team: 'Rogue',
    age: 18,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.13, Sensitivity: 2.1 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc5"),
    nickName: 'Majicbear',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'Torrent',
    age: 16,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.2, Sensitivity: 2.85 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc6"),
    nickName: 'BeastMode',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'Rebellion',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.25, Sensitivity: 2.4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc7"),
    nickName: 'Firstkiller',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'FazeClan',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 109, deadzone: 0.05, Sensitivity: 1.2 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc8"),
    nickName: 'Express',
    rgn: { Server: 'Oceania', Country: 'Australia' },
    nat: 'Australian',
    team: 'GroundZero',
    age: 23,
    controller: 'XBOX',
    Setting: { cameraFov: 105, deadzone: 0.15, Sensitivity: 1.4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc9"),
    nickName: 'CJCJ',
    rgn: { Server: 'Oceania', Country: 'Australia' },
    nat: 'Australian',
    team: 'Renagades',
    age: 20,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.2 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cca"),
    nickName: 'Torsos',
    rgn: { Server: 'Oceania', Country: 'Australia' },
    nat: 'Australian',
    team: 'GroundZero',
    age: 21,
    controller: 'KBM',
    Setting: { cameraFov: 110, deadzone: 0.2, Sensitivity: 2 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6ccb"),
    nickName: 'Caard',
    rgn: { Server: 'SouthAmerica', Country: 'Brazil' },
    nat: 'Brazilian',
    team: 'Fvria',
    age: 18,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.1, Sensitivity: 1.5 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6ccc"),
    nickName: 'Sadness',
    rgn: { Server: 'SouthAmerica', Country: 'Brazil' },
    nat: 'Brazilian',
    team: 'Noble',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 107, deadzone: 0.15, Sensitivity: 1.3 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6ccd"),
    nickName: 'LeoDkn',
    rgn: { Server: 'SouthAmerica', Country: 'Brazil' },
    nat: 'Brazilian',
    team: 'Elevate',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.1, Sensitivity: 1.3 }
  }
*/

//Nos mostrará todos los jugadore con 18 años

db.playersList.find({age: 18}).pretty()
/*
{
    _id: ObjectId("616c4a2506e31fc426da6cbc"),
    nickName: 'M0nkey M00n',
    rgn: { Server: 'Europe', Country: 'France' },
    nat: 'French',
    team: 'BDS',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 108, deadZone: 0.07, Sensitivity: 4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbe"),
    nickName: 'Itachi',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Moroccan',
    team: 'KarmineCorp',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.45 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc2"),
    nickName: 'Sypical',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'SSG',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.3 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc4"),
    nickName: 'Taroco',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'Canadian',
    team: 'Rogue',
    age: 18,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.13, Sensitivity: 2.1 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6ccb"),
    nickName: 'Caard',
    rgn: { Server: 'SouthAmerica', Country: 'Brazil' },
    nat: 'Brazilian',
    team: 'Fvria',
    age: 18,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.1, Sensitivity: 1.5 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6ccd"),
    nickName: 'LeoDkn',
    rgn: { Server: 'SouthAmerica', Country: 'Brazil' },
    nat: 'Brazilian',
    team: 'Elevate',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.1, Sensitivity: 1.3 }
  }
*/

//Nos busca todos los jugadores que juegan desde España

db.playersList.find({"rgn.Country": "Spain"})

/*
{
    _id: ObjectId("616c4a2506e31fc426da6cbd"),
    nickName: 'Marc_by_8',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Spanish',
    team: 'BDS',
    age: 20,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.07, Sensitivity: 1.45 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbe"),
    nickName: 'Itachi',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Moroccan',
    team: 'KarmineCorp',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.45 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc1"),
    nickName: 'DmentZa',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Spanish',
    team: 'GiantsGaming',
    age: 19,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 4.1 }
  }
*/

//Nos encontrará todos los jugadores que jueguen en el server de Norte America

db.playersList.find({"rgn.Server":{$eq: "NorthAmerica"}}).pretty()

/*
{
    _id: ObjectId("616c4a2506e31fc426da6cc2"),
    nickName: 'Sypical',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'SSG',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.3 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc3"),
    nickName: 'Reysbull',
    rgn: { Server: 'NorthAmerica', Country: 'Mexico' },
    nat: 'Chilean',
    team: 'True Neutral',
    age: 17,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 2.05 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc4"),
    nickName: 'Taroco',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'Canadian',
    team: 'Rogue',
    age: 18,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.13, Sensitivity: 2.1 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc5"),
    nickName: 'Majicbear',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'Torrent',
    age: 16,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.2, Sensitivity: 2.85 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc6"),
    nickName: 'BeastMode',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'Rebellion',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.25, Sensitivity: 2.4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc7"),
    nickName: 'Firstkiller',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'FazeClan',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 109, deadzone: 0.05, Sensitivity: 1.2 }
  }
*/

//Nos muestra los jugadores con un Field of View menor de 110

db.playersList.find({"Setting.cameraFov": {$lt: 110}}).pretty()

/*
{
    _id: ObjectId("616c4a2506e31fc426da6cbc"),
    nickName: 'M0nkey M00n',
    rgn: { Server: 'Europe', Country: 'France' },
    nat: 'French',
    team: 'BDS',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 108, deadZone: 0.07, Sensitivity: 4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc7"),
    nickName: 'Firstkiller',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'FazeClan',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 109, deadzone: 0.05, Sensitivity: 1.2 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc8"),
    nickName: 'Express',
    rgn: { Server: 'Oceania', Country: 'Australia' },
    nat: 'Australian',
    team: 'GroundZero',
    age: 23,
    controller: 'XBOX',
    Setting: { cameraFov: 105, deadzone: 0.15, Sensitivity: 1.4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6ccc"),
    nickName: 'Sadness',
    rgn: { Server: 'SouthAmerica', Country: 'Brazil' },
    nat: 'Brazilian',
    team: 'Noble',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 107, deadzone: 0.15, Sensitivity: 1.3 }
  }
*/

//Nos muestra todos los jugadores con una sensibilidad mayor de 1.00

db.playersList.find({"Setting.Sensitivity": {$gt: 1.60}})

/*
{
    _id: ObjectId("616c4a2506e31fc426da6cbc"),
    nickName: 'M0nkey M00n',
    rgn: { Server: 'Europe', Country: 'France' },
    nat: 'French',
    team: 'BDS',
    age: 18,
    controller: 'PS4',
    Setting: { cameraFov: 108, deadZone: 0.07, Sensitivity: 4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cbf"),
    nickName: 'Joreuz',
    rgn: { Server: 'Europe', Country: 'Nederlands' },
    nat: 'Dutch',
    team: 'Dignitas',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 1.8 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc1"),
    nickName: 'DmentZa',
    rgn: { Server: 'Europe', Country: 'Spain' },
    nat: 'Spanish',
    team: 'GiantsGaming',
    age: 19,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 4.1 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc3"),
    nickName: 'Reysbull',
    rgn: { Server: 'NorthAmerica', Country: 'Mexico' },
    nat: 'Chilean',
    team: 'True Neutral',
    age: 17,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.05, Sensitivity: 2.05 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc4"),
    nickName: 'Taroco',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'Canadian',
    team: 'Rogue',
    age: 18,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.13, Sensitivity: 2.1 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc5"),
    nickName: 'Majicbear',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'Torrent',
    age: 16,
    controller: 'XBOX',
    Setting: { cameraFov: 110, deadzone: 0.2, Sensitivity: 2.85 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cc6"),
    nickName: 'BeastMode',
    rgn: { Server: 'NorthAmerica', Country: 'USA' },
    nat: 'American',
    team: 'Rebellion',
    age: 16,
    controller: 'PS4',
    Setting: { cameraFov: 110, deadzone: 0.25, Sensitivity: 2.4 }
  },
  {
    _id: ObjectId("616c4a2506e31fc426da6cca"),
    nickName: 'Torsos',
    rgn: { Server: 'Oceania', Country: 'Australia' },
    nat: 'Australian',
    team: 'GroundZero',
    age: 21,
    controller: 'KBM',
    Setting: { cameraFov: 110, deadzone: 0.2, Sensitivity: 2 }
  }
*/