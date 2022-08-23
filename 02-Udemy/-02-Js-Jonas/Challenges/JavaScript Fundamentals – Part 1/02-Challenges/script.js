const marksMass = 95;
const marksHeight = 1.88;
const joneMass = 85;
const joneHeight = 1.76;

const BMIMarks = marksMass / marksHeight ** 2;
const BMIJone = joneMass / joneHeight ** 2;
console.log(BMIMarks, BMIJone);

if (BMIMarks > BMIJone) {
  console.log(`Mark's BMI (${BMIMarks}) is higher than John's! (${BMIJone})`);
} else {
  console.log(`Jone's BMI (${BMIJone}) is higher than Mark's! (${BMIMarks})`);
}
