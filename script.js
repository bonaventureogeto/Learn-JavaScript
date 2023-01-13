// console.log("Welcome to this JavaScript course!") // this prints a message


// // this is a single line comment

// /*
//     - this is a multi-line comment
//     - see!
// */


// // arithmetic operators in JS

// console.log(3 + 5) //addition
// console.log(3 - 5) //subtraction
// console.log(3 * 5) // multiplication
// console.log(3 / 5) // division
// console.log(11 % 5) // modulus
// console.log(3 ** 10) // exponentiation


// variables in JS
/*
    1. let
    2. const 
    3. var 
*/

// const num = 30;

// console.log(num)

// var age = 56;

// console.log(age)


// let cars = "Mazda";

// console.log(cars)


/* conditionals 
    - if/else
    - if/else if
*/

// let amount = 50;
// let min_amount = 50;

// let car = "Tesla";


// if (amount > 50) {
//     console.log("You can withdraw amount")
// } else if (amount == min_amount) {
//     console.log(car)
//     console.log("You only have 50 in your account")
// } else {
//     console.log("You have insufficient funds and can't withdraw")
// }



// let age = 13;

// if (age > 18 || age < 18) {
//     console.log("You can vote")
// } else {
//     console.log("You can't vote")
// }

// // object

// var cars = {
//     lambogini: 34,
//     bmw: 37,
//     toyota: 4,
//     Tesla: "ModelS",
//     VW: "Sedan",
//     bugatti: 23
// }

// // for--in loop

// for (var key in cars) {
//     console.log(key)
// }

// while loop

// let i = 0;

// while (i < 11) {
//     console.log("The number is " + i);
//     i++; // same as i = i + 1
// }

// for loop & break vs continue

// for (var i = 0; i < 11; i++) {

//     if (i == 8) {
//         continue;
//     }

//     console.log("The number is " + i)
// }

function add(a, b) {
    return a + b;
}

let answer = add(20, 80)

console.log(answer)