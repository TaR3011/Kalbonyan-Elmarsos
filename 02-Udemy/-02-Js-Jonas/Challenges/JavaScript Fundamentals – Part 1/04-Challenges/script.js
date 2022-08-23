const bill = 100;

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.15;
  }
};

console.log(calcTip(bill));
