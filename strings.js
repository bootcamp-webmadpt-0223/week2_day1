// Strings
let string1 = "dkhgasid";
let string2 = 'Soy un string';
let string3 = `0.1 + 0.2 💆‍♂️`;

let animals = `
1. Lion
2. Tiger
3. Dog
`;

// String interpolation: ES5 vs. ES6
const stringMessage = string1 + ' String interpolation ' + string2 + " " + string3;
const iLoveBackticks = `${string1} String interpolation ${string2} ${string3}`
console.log(stringMessage);
console.log(iLoveBackticks)


let message = "Don't be sad, be happy";

// String length property and access to specific position
console.log('Longitud', message.length)
console.log('Posición 1', message[message.length - 1])

// .charAt() method
console.log(message.charAt(0));
message[0] = 'P';
console.log(message);

// .indexOf method
console.log(message.indexOf('d'), 'd position')
console.log(message.indexOf('x'), 'x position')

// .lastIndexOf methtod
console.log(message.indexOf('b'), 'b position - indexOf')
console.log(message.lastIndexOf('b'), 'b position - lastIndexOf')

// .repeat method
console.log('la'.repeat(10));

// .includes method
console.log(message.includes("Dont"))

// .substring
console.log(message.substring(0, 4));
console.log(message.substring(4));
// No se puede usar console.log(message.substring(-4));

// .slice and .slice with negative number
console.log(message.slice(0, 4));
console.log(message.slice(4));
console.log(message.slice(-4));

// .startsWith() - .endsWith()
console.log(message.startsWith('Don'))
console.log(message.endsWith('happy'))

// .localeCompare()
console.log('Diego'.localeCompare('Adrián'))

// diego -> Diego
function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log('Capitalize', capitalize('ironhack'));

// reverse
// console.log(message.reverse())