//  object
let person = {
    name: "John",
    age: 30,
    city: "New York",
    hello: function(){
        console.log("Hello, World!");
    }
}

console.log(person);

console.log("***********************************")

// add a property to an object
person.citizenship = "Russian";

console.log(person);

console.log("***********************************")


let athelete = new Object();

console.log(athelete);

athelete.name = "Lebron";
athelete.age = 35;
athelete.city = "Cleveland";
athelete.school = "St. Vincent-St. Mary High School";

console.log(athelete);

// Map - key-value pairs
let mountains = new Map();

console.log(mountains);

let hills = new Map([
    ["Everest", 29029],
    ["K2", 28251],
    ["Kangchenjunga", 28169],
    ["Lhotse", 27940],
    ["Simbal", 27838]
])


let animals = new Map([
    ["dog", "woof"],
    ["cat", "meow"]
]);


console.log("***********************************")
console.log(hills);

console.log(hills.delete("Everest"));
console.log(hills);

hills.set("Makalu", 27838);
console.log(hills);

console.log(hills.has("Makalu"));

hills.forEach((value, key) => {
    console.log(key + " is " + value + " feet tall.")
})

animals.forEach(
    (value, key) =>{
        console.log(value, key)
    }
)

console.log("***********************************")

// Set

const mySet = new Set();

mySet.add(1);

console.log(mySet);

let myArray = [];

const numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

numbers.delete(5);

console.log(numbers);

numbers.forEach((value) => {
    myArray.push(value);
    console.log(value);
})

// coding challenge

let africa = [];

const eastAfrica = new Set(["Kenya", "Tanzania", "Uganda", "Rwanda", "Burundi"]);

eastAfrica.add("Somalia");
eastAfrica.add("DRC");

console.log(eastAfrica);

eastAfrica.forEach((value) => {
    africa.push(value);
});

console.log(africa);
