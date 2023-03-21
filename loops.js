let a = [1, 2, 3, 4, 5];

// console.log(a.length);

let american_presidents = ["Bush Sr.", "Clinton", "Bush Jr.", "Obama", "Trump", "Sleepy Joe"];

// console.log(american_presidents.length);

// for(initialization; condition; increment/decrement) {}

for(let k = 0; k < american_presidents.length; k++){
    console.log(american_presidents[k]);
}

// forEach loop
american_presidents.forEach((president) => {
    console.log(president)
})


// challenge
let product = {
    name: "Gummy Bears",
    quantity: 10,
    price: 1.99
}

product.store = "Walmart"
console.log(product)

delete product.name

console.log(product)

//trial
function evenNumbers(number){
    if(number % 2 === 0){
        console.log(number + " is even");
    }
}