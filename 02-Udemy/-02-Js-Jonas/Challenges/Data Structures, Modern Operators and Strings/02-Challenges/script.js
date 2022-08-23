//////////////////////////
//CHALLENGE 2

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${players}`);
}

// 2.
let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
}

average /= Object.values(game.odds).length;
console.log(average);

// 3.
console.log(`odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`odd of victory draw: ${game.odds.x}`);
console.log(`odd of victory ${game.team2}: ${game.odds.team2}`);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victoey ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
