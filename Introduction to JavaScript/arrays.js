// Arrays in a JavaScript

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // array of numbers

let cars = ["Toyota", "Honda", "Mercedes", "BMW"]; // array of strings

let mixed = [1, "Toyota", 3, "BMW", true, false]; // array of mixed data types

let items = [
  [1, 2, 3, 4, 5],
  ["Toyota", "Honda", "Mercedes", "BMW"],
  [1, "Toyota", 3, "BMW", true, false],
]; // array of arrays


// Accessing array elements
console.log(numbers[5]);

console.log(items[2][1]);

// Array methods

numbers.push(10); // adds an element to the end of the array

numbers.pop(); // removes an element from the end of the array 

numbers.unshift(0); // adds an element to the beginning of the array

numbers.shift(); // removes an element from the beginning of the array

numbers.reverse(); // reverses the array

numbers.sort(); // sorts the array in ascending order

let numbers_slice = numbers.slice(2, 7); // returns a new array from index 2 to 7

console.log(numbers_slice);

console.log(numbers);