const mark = {
  firstName: "Mark miller's",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "john smith's",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName} BMI (${mark.bmi}) is heigher than ${john.firstName} BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName} BMI (${john.bmi}) is heigher than ${mark.firstName} BMI (${mark.bmi})`
  );
}
