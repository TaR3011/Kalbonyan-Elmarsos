const calcAverage = (socre1, score2, score3) => (socre1 + score2 + score3) / 3;

let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
console.log(dolphinsAverage, koalasAverage);
const checkWinner = function (team1, team2) {
  if (team1 >= 2 * team2) {
    console.log(`Dolphins win (${team1} vs. ${team2})`);
  } else if (team2 >= 2 * team1) {
    console.log(`Koalas win (${team2} vs. ${team1})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(dolphinsAverage, koalasAverage);
checkWinner(100, 50);

dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
console.log(dolphinsAverage, koalasAverage);
checkWinner(dolphinsAverage, koalasAverage);
