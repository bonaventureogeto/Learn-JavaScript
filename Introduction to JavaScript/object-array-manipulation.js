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

console.log(peopleInCity);

// Create an empty array called `personInCity`.
// loops through the people array, access the names of people
// update their names to include the name of the city as their second name
