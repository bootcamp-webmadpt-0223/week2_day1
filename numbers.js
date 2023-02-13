// JavaScript DataTypes - Number & Expressions & Operators (+, -, *, /, **, %)

console.log('Suma', 5 + 4);
console.log('Resta', 5 - 4);
console.log('Multiplicación', 5 * 4);
console.log('División', 5 / 4);
console.log('Exponenciación', 5 ** 4);
console.log('Módulo', 5 % 4);

// Assigment operators

let result = 0;
result += 10; // result = result + 10;
result -= 1;
result *= 1;
result++; // result = result + 1;
result--;

let name = "John";
result = name / 2;
console.log(result);

function findSmallest(array) {
  // Infinity
  let result = Infinity;
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
    if(array[i] < result){
      result = array[i];
    }
  }
  return result;
}

findSmallest([-300, 399, 200, -100])

// Operator precedence
const precedence = (7 + 5) / 3 - 8;
console.log(result);



// Round operations - Math.round, Math.ceil & Math.floor
let decimal = 4.5;
console.log(Math.round(decimal), 'Round')
console.log(Math.ceil(decimal), 'Ceil')
console.log(Math.floor(decimal), 'Floor')

// Math.max - Math.min
console.log(Math.max(-300, 399, 200, -100))
console.log(Math.min(-300, 399, 200, -100))

// Random number - Math.random returns a random number between 0 y 0.99, 1 is excluded
console.log('Random 1', Math.random());
console.log('Random 2 - Random entre 0 y 10', Math.floor(Math.random() * 10));

// .toFixed method
const randomNumber = Math.random() * 15;
console.log('Random number 3', typeof randomNumber);
console.log('Random number 3 - toFixed', +randomNumber.toFixed(2));

//Using the method Math.random() return a random number between 0 and 20.
let result1 = Math.ceil(Math.random() * 20)
console.log(result1);

// Using console log and Math.min() and Math.max() return the lowest and the highest from the following set of numbers
Math.max(100, 874, 2343, 34, -9547, 0, 9234, 435, -23);
Math.min(100, 874, 2343, 34, -9547, 0, 9234, 435, -23)

let num = 0.1 + 0.2;
console.log(num.toFixed(1));