function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
const data = gameObject();

function allTeams() {
  return [data.home, data.away]
}
// [{..home team object}, {...away team object}]

function findTeam(teamName) {
  return allTeams().find(team => team.teamName === teamName)
}

function allPlayersEntries() {
  return allTeams().flatMap(team => Object.entries(team.players))
}
// [['player name', {...player stats}], []]

function findPlayer(playerName) {
  return allPlayersEntries().find(([name]) => name === playerName);
}
// returns ['player name', {...player stats}]

// numPointsScored(playerName): takes a player’s name and returns their points scored.
// shoeSize(playerName): Takes a player’s name as input and returns their shoe size.
// teamColors(teamName): Takes a team name as input and returns an array of the team’s colors.
// teamNames(): Returns an array of both team names.
// playerNumbers(teamName): Takes a team name as input and returns an array of all players’ jersey numbers on that team.
// playerStats(playerName): Takes a player’s name as input and returns an object with all stats for that player.
// bigShoeRebounds(): Returns the number of rebounds for the player with the largest shoe size.

// Steps:
// Identify the player with the largest shoe size.
// Return that player’s rebounds.
function numPointsScored(playerName) {
  const player = findPlayer(playerName);
  return player[1].points;
}

function shoeSize(playerName) {
  const player = findPlayer(playerName);
  return player[1].shoe;
}

function teamColors(teamName) {
  return findTeam(teamName).colors;
}

function teamNames() {
  return allTeams().map(team => team.teamName);
}

function playerNumbers(teamName) {
  const team = findTeam(teamName);
  return Object.values(team.players).map(player => player.number);
}

function playerStats(playerName) {
  const player = findPlayer(playerName);
  return player[1];
}

function bigShoeRebounds() {
  const dataObject = gameObject();
  let biggestShoeSize = 0;
  let reboundsAtMax = 0;

  for (const team in dataObject) {
    const players = dataObject[team].players;
    for (const player in players) {
      const stats = players[player];
      if (stats.shoe > biggestShoeSize) {
        biggestShoeSize = stats.shoe;
        reboundsAtMax = stats.rebounds;
      }
    }
  }
  return reboundsAtMax;

}
console.log(numPointsScored("Ben Gordon"))

console.log(allPlayersEntries())

console.log(teamColors("Charlotte Hornets"))
console.log(playerNumbers("Charlotte Hornets"))
console.log(bigShoeRebounds())