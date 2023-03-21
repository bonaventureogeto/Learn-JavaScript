function greet() {
  return("Hello, World!");
}

greet();

console.log(greet());

let hello = () => console.log("Hello, World!");

hello();

let sum = (a, b) => a + b;

console.log(sum(700, 299));

let car = (make, model) => {
  return {
    make: make,
    model: model
  }
}

console.log(car("Honda", "Civic"));


/* 
IIFE - Immediately Invoked Function Expression
Function that is executed immediately after it is created
*/

(function hey(){
  console.log("This is an immediately invoked function expression!");
})();


// IIFE coding challenge - create a function that prints even numbers from 0 to 100

(function even(){
  for(let num = 0; num <=100; num++){
    if(num%2 == 0){
      console.log(num + " is an even number");
    }
  }
})();

// (function)(); // this is how you call an IIFE
