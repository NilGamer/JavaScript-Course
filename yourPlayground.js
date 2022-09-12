//Baby weather app
// let weather = prompt("how's the weather today?");

// if (weather == 'rainy') {
//   console.log('Grab your umbrella ☔');
// }
// else {
//   console.log('Grab your sunglasses 😎');
// }

//functions
function sayMyName(name) {
  console.log('Hi', name);
}

// sayMyName('Nil');

function sum(a, b) {
  return a + b;
}

// console.log(sum(4, 5));

//implicit return
const multiply = (a, b) => a * b

//explicit return
const multiplyEx = (a, b) => {
  return a * b
}

//Arrays
const groceries = ['🍎', '🍊'];
// console.log(groceries);

groceries.push('🍪');
// console.log(groceries);

console.log(groceries.slice(1, groceries.length));

console.log(groceries.indexOf('🍎'));