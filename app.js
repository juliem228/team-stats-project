let team = {
  _players: [
    {
      firstName: 'drew',
      lastName: 'smith',
      age: 28
  },
  {
      firstName: 'jeff',
      lastName: 'mcneil',
      age: 29
  },
  {
      firstName: 'seth',
      lastName: 'lugo',
      age: 32
  }
  ],
  _games: [
    {
      opponent: 'yankees',
      teamPoints: 5,
      opponentPoints: 12
    },
    {
      opponent: 'braves',
      teamPoints: 6,
      opponentPoints: 2
    },
    {
    opponent: 'dodgers',
    teamPoints: 2,
    opponentPoints: 9
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let addPlayer = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(addPlayer);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let addGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(addGame);
  }
}

team.addPlayer('steph', 'curry', 28);
team.addPlayer('lisa', 'leslie', 44);
team.addPlayer('bugs', 'bunny', 76);

team.addGame('diamondbacks', 0, 6);
team.addGame('rockies', 9, 4);
team.addGame('reds', 1, 8);

console.log(team._games);
