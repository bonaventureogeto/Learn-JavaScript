let name = "John";

let names = ["John", "Jade"]; // list - array

// objects in JavaScript - objects are a set of key-value pairs separated by a comma

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
