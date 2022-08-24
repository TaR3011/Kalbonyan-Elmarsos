// Challenge 2

class Car {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.mark} is going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.mark} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    console.log(`${this.mark} is going at ${this.speed / 1.6} mi/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car("Ford", 120);
ford.speedUS;
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);
