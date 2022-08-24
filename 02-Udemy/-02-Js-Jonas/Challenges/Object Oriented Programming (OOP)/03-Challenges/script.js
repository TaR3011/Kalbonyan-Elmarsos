// Challenge 3
const Car = function (mark, speed) {
  this.speed = speed;
  this.mark = mark;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} is going at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.mark} is going at ${this.speed} km/h`);
};

const EV = function (mark, speed, charge) {
  Car.call(this, mark, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 10;
  this.charge--;
  console.log(
    `${this.mark} is going at ${this.speed} km/h, with a ${this.charge} charge`
  );
};
const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.break();
tesla.accelerate();
