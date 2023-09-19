// Write a JavaScript function that calculates the sum of the prime numbers between 0 and n

let primes = [];

function isPrime(n) {
    if (n < 2) return false; // num <= 1
    for (let i = 2; i < n; i++)
        if (n % i == 0) return false;
    return true;
}

for (let number = 0; number < 100; number++)
    if (isPrime(number)) {
        primes.push(number);
    }

console.log(primes)

let sum = 0;

for (let prime of primes) {
    sum = sum + prime;
}

console.log("The sum of the primes is ", sum);
