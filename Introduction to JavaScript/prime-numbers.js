// write a for loop that returns prime numbers between 1 and 100
// a prime is divisible by 1 and itself

for (let i = 2; i < 100; i++) {
  let isPrime = true; // Assume i is prime until proven otherwise

  // check if i is prime or not
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false; // i is divisible by j, so it's not prime
      break; // exit the loop
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
