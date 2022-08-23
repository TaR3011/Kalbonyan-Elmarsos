//Challenge 3

const calaAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calaAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log("-------------------------");
const avg2 = calaAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
