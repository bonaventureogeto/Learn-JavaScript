let name = "John";

let names = ["John", "Jade"]; // list - array

// objects in JavaScript - objects are a set of key-value pairs separated by a comma

let Kenya = {
  continent: "Africa",
  population: "50M",
  landmass: "582,646 km²"
};

let person = {
    name: "Jake",
    age: 20,
    height: 1.65,
    occupation: "Software Developer",
    Nationality: "Kenyan",
    family: {
        father: "Jacob",
        mother: "Jude",
        sisters: {
            sister1: "Jane",
            sister2: "July"
        }
    },
    hobbies: ["Swimming", "Racing", "Reading", "Cooking"]
}

// accesing values in an object
console.log(person.family.sisters.sister1); // dot notation

console.log(person.hobbies[0]); // accesing values inside a list/array

console.log(person["family"]["sisters"]["sister1"]); // using index


// list of objects

let countries = [
    {
        name: "Kenya",
        continent: "Africa",
        population: "50M"
    },
    {
        name: "India",
        continent: "Asia",
        population: "1.4B"
    },
    {
        name: "Switzerland",
        continent: "Europe",
        population: "8.5M"
    }
]

console.log(countries[0].population);

// Write a JavaScript program that takes in an object representing a person1 and 
// returns a string of their full name.

let person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person1.firstName + " " + person1.lastName);
