//Values and Variables
const country = "Bulgaria";
const continent = "Europe";
let population = 7000000;

console.log(country, continent, population);

//Data types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//let, const and var

language = "buglarian";

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 30);
const desccription1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(desccription1);

const desccription2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(desccription2);
