// using .map function

let persons = [
    {
        firstName: "John",
        lastName: "Doe"
    },
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "James",
        lastName: "Doe"
    }
]
// using the .map function to loop through the object

let people = ["Jake", "John", "Jane", "James"];

persons.map((person) => {
    console.log(person.firstName + " " + person.lastName);
});

// normal function
function greet(name) {
    console.log("Hello, ", name);
}

// arrow function
let greet = (name) => {
    console.log("Hello, ", name);
}

// write an arrow function to find the sum of two numbers