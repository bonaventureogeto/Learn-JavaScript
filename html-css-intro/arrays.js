let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

let mixed = [1, "Jane Doe", true, null, undefined, { name: "John Doe", age: 25 }, [1, 2, 3, 4, 5]];

// Accessing array elements
// console.log(mixed[-1]);
// console.log(mixed[1]);

// fruits.shift()
// console.log(fruits)

// console.log(mixed[mixed.length-1]) // last element

// let fruit1 = fruits.slice(0, 3);
// console.log(fruit1);

// .map() method
let num1 = numbers.map((num) => {
    return num * 2;
});

console.log(num1);

// arrow function
// let greetings = () => {
//     console.log("Hello World");
// }

// greetings();