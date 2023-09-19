// Create an empty array called `people`

const people = [
    {name: "John", age: 30, city: "Melborne"},
    {name: "Jake", age: 14, city: "Nairobi"},
    {name: "Jude", age: 24, city: "Nairobi"}
];


// Use a for loop to iterate through the `people` array and log each person's information.
for (person in people) {
    // console.log(people[person].age + 5);
    people[person].age = people[person].age + 5;
}
// console.log(people);

// Create an empty array called `peopleInCity`.
const peopleInCity = [];

for (person in people) {
    // console.log(people[person].city);
    if (people[person].city === "Nairobi") {
        peopleInCity.push(people[person]);
    }
}

// console.log(peopleInCity);

// Create an empty array called `personInCity`.
// loops through the people array, access the names of people
// update their names to include the name of the city as their second name

// Calculate the average age of all the people in the `people` array.

// solution 1
let ages = [];

for (person in people) {
    ages.push(people[person].age);
}
console.log(ages);

let total = 0;

for (age in ages) {
    total += ages[age];
}
let average = total / ages.length;

console.log(average);

// solution 2
let totalAge = 0;

for (let person of people) {
  totalAge += person.age;
}

const averageAge = totalAge / people.length;
console.log("Average age:", averageAge);
