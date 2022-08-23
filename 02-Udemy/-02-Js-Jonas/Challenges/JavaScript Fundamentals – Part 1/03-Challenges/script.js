// //CHALLANGE 3
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;

// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage) {
//   console.log(`Dolphins is winner`);
// } else if (koalasAverage > dolphinsAverage) {
//   console.log(`Koalas in Winner`);
// } else if (koalasAverage === dolphinsAverage) {
//   console.log(`All of them win`);
// }

// //Bouns 1

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;

// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//   console.log(`Dolphins is winner`);
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//   console.log(`Koalas in Winner`);
// } else if (koalasAverage === dolphinsAverage) {
//   console.log(`All of them win`);
// }

//Bouns 2

const dolphinsAverage = (97 + 112 + 80) / 3;
const koalasAverage = (109 + 95 + 50) / 3;

console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins is winner`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas in Winner`);
} else if (
  koalasAverage === dolphinsAverage &&
  koalasAverage >= 100 &&
  dolphinsAverage >= 100
) {
  console.log(`All of them is win`);
} else {
  console.log(`No one is win`);
}
