const arrayTest1 = [17, 21, 23];
const arrayTest2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arrayTest1.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(arrayTest1);
