// console.log("Hello, World!") //first program
// //prints
// console.log("12345 + 12345") // string

// // arithmetic operations

// console.log(12 * 12 * 23 - 345 + 1000) // number
// // modulus = remainder after division
// console.log(12 % 5) // 2

// console.log(2 < 5)

/* 
first comment
second  comment
third comment
*/

// let car = "Toyota" // car is a variable name and "Toyota" is a value

// console.log(car) // print

// var value = prompt('value')// input function
// console.log(value)

// variables - Keywords: let, var, const
// console.log(firstname); // undefined
// const firstname = 'Barrack';
// let lastname = 'Obama';
// let fullname = firstname + ' ' + lastname;
// let email = firstname + '.' + lastname + '@gmail.com';  

// console.log(fullname);
// console.log(email);


// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// functions

// function greet(name){
//     if (name == "Brian"){
//         console.log("Hello, " + name + "!");
//     } else {
//         console.log(name + ", You're an imposter");
//     }
// }

// greet("Ken"); // calling the function

// function nairobi(){
//     console.log("Welcome to the City that never sleeps!");
// }

// nairobi();

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(20, 80);


// function kuccps(points){
//     if(points >= 80) {
//         console.log("You have been admitted to study Medicine at UoN");
//     } else if (points >= 74 && points <= 79) {
//         console.log("You have been admitted to study Law at UoN");
//     } else if (points >= 70 && points <= 73) {
//         console.log("You have been admitted to study Biochemistry at UoN");
//     } else {
//         console.log("You have been admitted to study Engineering!")
//     }
// }

// kuccps(60);


// function vote(age){
//     if (age >= 18 && age <= 100) {
//         console.log("You are eligible to vote");
//     } else {
//         console.log("You are not eligible to vote");
//     }
// }

// vote(10);

// objects

let kenya = {
    capital: "Nairobi",
    continent: "Africa",
    region: "Eastern Africa",
    culture: "Corruption",
    stable_food: "Water",
    motto: function(){
        console.log("Harambee!");
    }
};

kenya.capital = "Juja"

delete kenya.motto


console.log(kenya.capital);
console.log(kenya.continent);
console.log(kenya.region);
console.log(kenya.culture);
console.log(kenya.motto());
