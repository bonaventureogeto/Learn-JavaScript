// content for week 2

let person = {
    name: "John",
    age: 34,
    gender: "male",
    occupation: "Teacher"
}

// console.log(person.length)

// for (let key in person) {
//     console.log(key)
// }

// challenge

// function calculateArea(radius) {
//     const pi = 3.14;
//     let area = pi * radius * radius
//     return area
// }

// let radius = prompt("Enter the radius: ")

// console.log(calculateArea(radius))

function area(radius) {
    return Math.PI * Math.pow(radius, 2);
}


// let radius = 12;

// let area = Math.PI * Math.pow(radius, 2);

console.log(area(10))