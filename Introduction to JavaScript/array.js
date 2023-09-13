// arrays in JavaScript

// an array is a collection of multiple values separated by a comma inside square brackets []

let empty = []; // this is an empty array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; // array of numbers

let names = ["John", "Janet", "Jake", "Jaba", "Januaris"]; // array of strings

let mixed = [1, "Jake", "Jade", 30, true]; // this is an array with mixed data types

let cars = [["Model S", "Model Y", "Plaid"], ["X5", "X3", "X1"], ["C", "G"]]; // array of arrays

let mixed2 = [1, ["Model S", "Model Y", "Plaid"], "Kenya", ["X5", "X3", "X1"], true, ["C", "G"], "20"]; // array of arrays

// accessing elements inside of arrays
// index - position of a value in an array
// In JavaScript, indexing starts from 0

console.log(cars[0][0]);

console.log(numbers)

// array methods
numbers.push(10); // adds an element i.e 10 to the end of the array
numbers.pop(); // removes the last element from the array

numbers.unshift(0); // adds an element i.e 0 to the beggining of the array
numbers.shift(); // removes the first element from the array

// numbers.reverse(); // reverses the array
// numbers.sort(); // arrange the numbers in an asscending order

let new_array = numbers.slice(0, 5); // slices the array from index 0 up to index 4 not including index 5
let new_array1 = numbers.slice(5, 11); // slices the array from index 5 up to index 10 not including index 11
let new_array2 = numbers.slice(11, 17); // slices the array from index 1 up to index 16 not including index 17

console.log(numbers);

console.log(new_array);
console.log(new_array1);
console.log(new_array2);

empty.push(new_array); // adds the new array to the empty array
empty.push(new_array1); // adds the new array to the empty array
empty.push(new_array2); // adds the new array to the empty array
empty.unshift(mixed);

console.log(numbers.length); // this returns the size of the array
console.log(mixed.length); // this returns the size of the array

console.log(names[names.length - 1]); // returns the last element of the array

// console.log(empty);