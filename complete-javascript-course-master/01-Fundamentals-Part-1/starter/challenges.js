// coding challenge 1

//Data set 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//Data set 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

function calcBMI(mass, height) {
  return (BMI = mass / height ** 2);
}

let BmiMark = calcBMI(massMark, heightMark);
let BmiMark2 = calcBMI(massMark2, heightMark2);
let BmiJohn = calcBMI(massJohn, heightJohn);
let BmiJohn2 = calcBMI(massJohn2, heightJohn2);
let markHigherBMI = BmiMark > BmiJohn;
console.log(`Data set 1 : ${markHigherBMI}`);
markHigherBMI = BmiMark2 > BmiJohn2;
console.log(`Data set 2 : ${markHigherBMI}`);
