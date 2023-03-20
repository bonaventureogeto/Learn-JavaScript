let k = [[1, 2, 3, 4], ["Kenya", "Uganda", "Tanzania", "Rwanda"], [true, false, true, false], ["Mango", "Apple", "Orange", "Banana"]];

for(const i in k){
    console.log(k[i])
}

let person = {
    name: "John",
    age: 30,
    city: "Nairobi",
    country: "Kenya",
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

person.greet()

for (let i in person){
    console.log(person[i])
}

// continue
for (let k = 1; k <= 10; k++){
    if (k % 2 == 0){
        continue
    }
    console.log(k)
}

// arrow functions
let kenya = () => console.log("Kenya")
kenya()

//arrow funtion for bank account
let bankAccount = (balance) => {
    return balance
}

console.log(bankAccount(1000000))