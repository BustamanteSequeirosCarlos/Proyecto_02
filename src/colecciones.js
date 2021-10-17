db.playersList.deleteMany({})
db.playersList.insertMany(
    [
        {nickName: "M0nkey M00n", rgn: {Server: "Europe", Country: "France"}, nat: "French", team: "BDS", age: 18, controller: "PS4", Setting: {cameraFov: 108, deadZone: 0.07, Sensitivity: 4.00}},
        {nickName: "Marc_by_8", rgn: {Server: "Europe", Country: "Spain"}, nat: "Spanish", team: "BDS", age: 20, controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.07, Sensitivity: 1.45}},
        {nickName: "Itachi", rgn: {Server: "Europe", Country: "Spain"}, nat: "Moroccan", team: "KarmineCorp", age: 18, controller:"PS4", Setting: {cameraFov: 110, deadzone: 0.05, Sensitivity: 1.45}},
        {nickName: "Joreuz", rgn: {Server: "Europe", Country: "Nederlands"}, nat: "Dutch", team: "Dignitas", age: 16, controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.05, Sensitivity: 1.80}},
        {nickName: "Archie", rgn: {Server: "Europe", Country: "England"}, nat: "English", team: "SEMPER", age: 16, controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.05, Sensitivity: 1.50}},
        {nickName: "DmentZa", rgn: {Server: "Europe", Country: "Spain"}, nat: "Spanish", team: "GiantsGaming", age: 19, controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.05, Sensitivity: 4.10}}
    ]
)

db.playersList.insertMany(
    [
        {nickName: "Sypical", rgn: {Server: "NorthAmerica", Country: "USA"}, nat: "American", team: "SSG", age: 18, controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.05, Sensitivity: 1.30}},
        {nickName: "Reysbull", rgn: {Server: "NorthAmerica", Country: "Mexico"}, nat: "Chilean", team: "True Neutral", age: 17 , controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.05, Sensitivity: 2.05}},
        {nickName: "Taroco", rgn: {Server: "NorthAmerica", Country: "USA"}, nat: "Canadian", team: "Rogue", age: 18, controller: "XBOX", Setting: {cameraFov: 110, deadzone: 0.13, Sensitivity: 2.10}},
        {nickName: "Majicbear", rgn: {Server: "NorthAmerica", Country: "USA"}, nat: "American", team: "Torrent", age: 16, controller: "XBOX", Setting: {cameraFov: 110, deadzone: 0.20, Sensitivity: 2.85}},
        {nickName: "BeastMode", rgn: {Server: "NorthAmerica", Country: "USA"}, nat: "American", team: "Rebellion", age: 16, controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.25, Sensitivity: 2.40}},
        {nickName: "Firstkiller", rgn: {Server: "NorthAmerica", Country: "USA"}, nat: "American", team: "FazeClan", age: 16, controller: "PS4", Setting: {cameraFov: 109, deadzone: 0.05, Sensitivity: 1.20}}
    ]

)

db.playersList.insertMany(
    [
        {nickName: "Express", rgn: {Server: "Oceania", Country: "Australia"}, nat: "Australian", team: "GroundZero", age: 23, controller: "XBOX", Setting: {cameraFov: 105, deadzone: 0.15, Sensitivity: 1.40}},
        {nickName: "CJCJ", rgn: {Server: "Oceania", Country: "Australia"}, nat: "Australian", team: "Renagades", age: 20, controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.05, Sensitivity: 1.20}},
        {nickName: "Torsos", rgn: {Server: "Oceania", Country: "Australia"}, nat: "Australian", team: "GroundZero", age: 21, controller: "KBM", Setting: {cameraFov: 110, deadzone: 0.20, Sensitivity: 2.00}}
    ]
)

db.playersList.insertMany(
    [
        {nickName: "Caard", rgn: {Server: "SouthAmerica", Country: "Brazil"}, nat: "Brazilian", team: "Fvria", age: 18, controller: "XBOX", Setting: {cameraFov: 110, deadzone: 0.10, Sensitivity: 1.50}},
        {nickName: "Sadness", rgn: {Server: "SouthAmerica", Country: "Brazil"}, nat: "Brazilian", team: "Noble", age: 16, controller: "PS4", Setting: {cameraFov: 107, deadzone: 0.15, Sensitivity: 1.30}},
        {nickName: "LeoDkn", rgn: {Server: "SouthAmerica", Country: "Brazil"}, nat: "Brazilian", team: "Elevate", age: 18, controller: "PS4", Setting: {cameraFov: 110, deadzone: 0.10, Sensitivity: 1.30}}
    ]
)