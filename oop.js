//oop in JavaScript

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person('John', 20);
let p2 = new Person('Jane', 21);
// console.log(p1);
// console.log(p2);

//prototype
Person.prototype = {
    height: 2,
    weight: 20,
    walk: function() {
        console.log('walking');
    }
}
let p3 = new Person('John', 20, 20);
// console.log(Person.prototype);


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

// console.log(account.getBalance())

account.deposit(99999)

// console.log(account.getBalance())

account.withdraw(1380)

// console.log(account.getBalance())

// class in JavaScript

let people = []
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    addPerson() {
        let person = {
            name: this.name,
            age: this.age
        }
        people.push(person);
    }

    walk() {
        console.log(this.name + ' is walking');
    }

    eat() {
        console.log(this.name + ' is eating');
    }

    sleep() {
        console.log(this.name + ' is sleeping');
    }

    howOld(){
        console.log(this.name + ' is ' + this.age + ' years old');
    }

}

let thePerson = new Person1('John', 20);
let thePerson1 = new Person1("Jane", 200);
let thePerson2 = new Person1("Jack", 2);
let thePerson3 = new Person1("Janice", 12);
let thePerson4 = new Person1("Joker", 23);
let thePerson5 = new Person1("Joker", 23);
thePerson.addPerson();
thePerson1.addPerson();
thePerson2.addPerson();
thePerson3.addPerson();
thePerson4.addPerson();
thePerson5.addPerson();
console.log(people);
// thePerson.walk();
// thePerson.eat();
// thePerson.sleep();
// thePerson.howOld();