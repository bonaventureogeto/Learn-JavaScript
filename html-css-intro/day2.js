// console.log(name); // undefined

// var name = "John";

// console.log(name);

// ES 6: let and const
// console.log(name); // ReferenceError: Cannot access 'name' before initialization

let name = "John";

name = "Mark"; // overwrites the value of name ("John")

console.log(name);

const age = 20; // cannot be reassigned - immutable - constant

// age = 30; // TypeError: Assignment to constant variable.

console.log(age);

let marks1 = 700;
let marks2 = 800;

let totalMark = marks1 + marks2;

console.log(totalMark);