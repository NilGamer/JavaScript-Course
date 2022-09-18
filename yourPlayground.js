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

// console.log(groceries.slice(1, groceries.length));

// console.log(groceries.indexOf('🍎'));

const letterFrequency = (phrase) => {
  let frequency = {};

  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] += 1;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}

// console.log(letterFrequency("nilesh"));

const wordFrequency = (phrase) => {
  let frequency = {};

  for (const letter of phrase.split(" ")) {
    if (letter in frequency) {
      frequency[letter]++;
    }
    else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}

// console.log(wordFrequency("lol what lol"));

// map
const doubleMap = (numbers) => {
  return numbers.map(number => number * 2);
}

console.log(doubleMap([1, 2, 3, 4]));

// filter
// const filter = (numbers, greaterThan) => {
//   let result = [];

//   result = numbers.filter(number => number > greaterThan);

//   return result;
// }

const nums = [1, 2, 3, 4, 5, 6, 7];
let result = nums.filter(num => num > 3);

// console.log(result);

const players = [
  { name: 'dhoni', price: 20, team: 'csk' },
  { name: 'kohli', price: 19, team: 'rcb' },
  { name: 'raina', price: 10, team: 'csk' },
  { name: 'rohit', price: 12, team: 'mi' },
  { name: 'yuvi', price: 14, team: 'punjab' },
  { name: 'jadeja', price: 15, team: 'csk' },
];

console.log(players.filter(player => player.team == 'csk'));
