// console.log("task 1");

// setTimeout(() => console.log("task 2"), 0);

// setTimeout(fxn, time) is a function that takes a function and a time in milliseconds

// console.log("task 3");


// let years = function age() {
//     console.log("My age is 25");
// }

// function person(name, years) {
//     console.log("My name is " + name + " and I am " + years() + " years old.");
// }

// person("John", years);

// callback function

const callbackFunc = () => console.log('Im the callback')

const higherOrderFunction = (callback) => callback()

higherOrderFunction(callbackFunc)


// callback and higher order functions

const football = () => console.log("Kenyan football is trash") // callback

const sports = (sport) => sport(); // higher order function

sports(football) // call


// synchronous and asynchronous callbacks

// map()

const arr = [1,2,3]

console.log('logging...')
arr.map(e => console.log('sync item', e)) // This is a synchronous callback

arr.map(e => setTimeout(() => console.log('async item', e), 0)) // This is an asynchronous callback

// setTimeout(() => console.log('async item', e), 0)

console.log('the stuff')

// setTimeout(function, time-in-milliseconds)