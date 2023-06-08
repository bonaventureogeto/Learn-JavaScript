/*
    Sum of numbers between 1 and ‘n’
    Write a program that takes a positive integer n as input and 
    outputs the sum of all numbers between 1 and n that are divisible by 3 or 5 (or both).
    For example, if n is 15, the program should output 45, 
    since the numbers between 1 and 15 that are divisible by 3 or 5 are: 3, 5, 6, 9, and 10, 
    and their sum is 45.
    Here are some additional requirements and hints:
        1. Use a loop to iterate over all the numbers between 1 and n.
        2. Use an if statement and the modulus operator (%) to check if a number is divisible by 3 or 5.
        3. Use a variable to keep track of the running sum, and update it on each iteration of the loop.
        4. You can assume that the input n will be a positive integer.
*/

function sumOf1toN(n) { 

    let sum = 0;
    for (let i = 1; i < n; i++){
        if (i % 3 === 0 || i % 5 === 0)
            sum = sum + i;
    }
    console.log(sum);
}

sumOf1toN(2000);

