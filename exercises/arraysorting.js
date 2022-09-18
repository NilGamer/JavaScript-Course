// Test you code by forking this repl: 
// 👉 COMMING SOON!


// Write a function that takes in an array and sort the numbers inside from least to greatest

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[i] > array[j]) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
}

// BONUS sort the array without using .sort()

