// Callenge #2
const calaAverageHumanAge = function (ages) {
  console.log(ages);
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const fillterAges = humanAges.filter((hAge) => hAge > 18);
  const averageAges =
    fillterAges.reduce((acc, age) => acc + age, 0) / fillterAges.length;
  console.log(humanAges);
  console.log(fillterAges);
  console.log(averageAges);
};

calaAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calaAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
