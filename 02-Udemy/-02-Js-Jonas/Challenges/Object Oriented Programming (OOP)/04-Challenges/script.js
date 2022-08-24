// Challenge 4
class CarCL {
  constructor(mark, speed) {
    this.speed = speed;
    this.mark = mark;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.mark} is going at ${this.speed} km/h`);
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.mark} is going at ${this.speed} km/h`);
    return this;
  }
}

class EvCl extends CarCL {
  #charge;
  constructor(mark, speed, charge) {
    super(mark, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.mark} is going at ${this.speed} km/h, with a ${
        this.#charge
      } charge`
    );

    return this;
  }
}

const rivian = new EvCl("Rivan", 120, 23);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .break()
  .chargeBattery(50)
  .accelerate();
console.log(rivian);
