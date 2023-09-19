/*
        Challenge Title: Object and Array Manipulation with For Loops
        Challenge Description:
        You are given an array of objects, each representing a person's information. Your task is to write a JavaScript program that performs various operations on this data using for loops. Implement the following tasks:
        1. Create an array of objects:
        - Create an empty array called `people`.
        2. Add people to the array:
        - Add three people to the `people` array. Each person should be represented as an object with the following properties: `name` (a string), `age` (a number), and `city` (a string).
        3. Display people's information:
        - Use a for loop to iterate through the `people` array and log each person's information. (Do some research on how to loop through an array. I'll attach materials below to help.)
        4. Update ages:
        - Increase the age of each person in the `people` array by 5 years.
        5. Filter people by city:
        - Create an empty array called `peopleInCity`.
        - Use a for loop to iterate through the `people` array and add people to the `peopleInCity` array if they live in a specific city of your choice (e.g., "New York"). Only add people from that city to the new array.
        6. Calculate the average age:
        - Calculate the average age of all the people in the `people` array.
        7. Display the results:
        - Log the `peopleInCity` array and the average age calculated in steps 5 and 6.
        Your code should only use objects, arrays, and for loops to accomplish these tasks.
        Example Input:
        const people = [
        { name: "Alice", age: 30, city: "New York" },
        { name: "Bob", age: 25, city: "Los Angeles" },
        { name: "Charlie", age: 35, city: "New York" },
        ];
        Example Output:
        Name: Alice, Age: 30, City: New York
        Name: Bob, Age: 25, City: Los Angeles
        Name: Charlie, Age: 35, City: New York
        People in New York:
        Name: Alice, Age: 35, City: New York
        Name: Charlie, Age: 40, City: New York
        Average Age: 33.33
*/


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

// Calculate the average age of all the people in the `people` array.

// solution 1
let ages = [];

for (person in people) {
    ages.push(people[person].age);
}

let total = 0;

for (age in ages) {
    total += ages[age];
}
let average = total / ages.length;

console.log("Average age is ",average);

// solution 2
let totalAge = 0;

for (let person of people) {
  totalAge += person.age;
}

const averageAge = totalAge / people.length;
console.log("Average age:", averageAge);
