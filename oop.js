//oop in JavaScript

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person('John', 20);
let p2 = new Person('Jane', 21);
console.log(p1);
console.log(p2);

//prototype
Person.prototype = {
    height: 2,
    weight: 20,
    walk: function() {
        console.log('walking');
    }
}
let p3 = new Person('John', 20, 20);
console.log(Person.prototype);


// Encapsulation in JavaScript
 function BankAccount(balance){
    let _balance = balance

    this.getBalance = function(){
        return _balance
    }

    this.deposit = function(amount){
        _balance += amount
        return _balance
    }

    this.withdraw = function(amount){
        if(_balance >= amount){
            return _balance -= amount
        } else{
            console.log("Insufficient funds")
        }
    }

 }

let account = new BankAccount(10000)

console.log(account.getBalance())

account.deposit(99999)

console.log(account.getBalance())

account.withdraw(1380)

console.log(account.getBalance())