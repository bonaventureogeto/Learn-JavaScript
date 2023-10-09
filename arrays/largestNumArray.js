// Write a JavaScript function that takes an array of numbers as input and returns the largest number in the array.

function findLargestNumber(numbers) {
    // Your code here
    let largestNumber = 0;
    for (let num = 0; num < numbers.length; num++){
        if (numbers[num] > largestNumber) {
            largestNumber = numbers[num];
        }
    }
    return largestNumber;
}

let numbers = [1, 3, 5, 7, 9, 10, 34, 57, 89, 455];

console.log(findLargestNumber(numbers));
