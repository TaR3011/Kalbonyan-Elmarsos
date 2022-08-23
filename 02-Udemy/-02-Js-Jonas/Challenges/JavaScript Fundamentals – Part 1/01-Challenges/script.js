//CHALLANGE 1

// const marksMass = 78;
// const marksHeight = 1.69;
// const joneMass = 92;
// const joneHeight = 1.95;
const marksMass = 95;
const marksHeight = 1.88;
const joneMass = 85;
const joneHeight = 1.76;

const BMIMarks = marksMass / marksHeight ** 2;
const BMIJone = joneMass / joneHeight ** 2;
const markHigherBMI = BMIMarks > BMIJone;

console.log(markHigherBMI, BMIMarks, BMIJone);
