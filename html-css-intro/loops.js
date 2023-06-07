// for (let i = 1; i <= 20; i++) {
//     console.log("This is number " + i);
// }

/* 
    coding challenge: write a program that prints even numbers between 1 to 100
        soln: 1. print all numbers between 1 to 100
                2. check if the number is even
                3. if the number is even, print it
                4. Done
*/

// for (let i = 1; i <= 100; i++){
//     // console.log(i);
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     }
// }

// break and continue statements/keywords

for (let i = 1; i <= 100; i++) {
    if (i === 50) {
        continue;
    }
    console.log(i);
}

// while loops

// let i = 1;

// while (i <= 100) {
//     console.log(i);
//     i++;
// }