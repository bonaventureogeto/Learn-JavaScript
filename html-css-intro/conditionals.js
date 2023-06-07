// if else statements

// let age = 18;

// if (age < 18) {
//     console.log("You're not eligible to vote");
// } else {
//     console.log("You're eligible to vote");
// }


// challenge: write a program to check if a number is greater than 10 or not

// let number = 2;

// if (number > 10) {
//     console.log(number + " is greater than 10");
// } else if (number < 10) {
//     console.log(number + " is less than 10");
// } else if (number === 20) {
//     console.log(number + " is equal to 20");
// } else {
//     console.log(number + " is equal to 10");
// }


// let num = 20;

// // strict equality operator
// if (num === 20) {
//     console.log("Hello , 20 is a number");
// } else {
//     console.log("20 is a string");
// }

// write a program to check if a number is even or odd

// let num = 20;

// if(num % 2 === 0) {
//     console.log(num + " is even");
// } else {
//     console.log(num + " is odd");
// }

// challenge: write a program to check if a number is divisible by 3 or not

// let number = 999;

// if (number % 3 === 0) {
//     console.log(number + " is divisible by 3");
// } else {
//     console.log(number + " is not divisible by 3");
// }

let student_name = "Chris";

let points = 2600;

if (points >= 2000 && points <= 2500) {
    console.log(student_name + " has an A")
} else if (points >= 1800 && points < 2000) {
    console.log(student_name + " has a B")
} else if (points >= 1500 && points < 1800) {
    console.log(student_name + " has a C")
} else if (points >= 1200 && points < 1500) {
    console.log(student_name + " has a D")
} else if (points > 0 && points < 1200) {
    console.log(student_name + " has an E")
} else {
    console.log("Invalid points")
}
