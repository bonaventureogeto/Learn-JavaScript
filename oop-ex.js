//object literal
let houses = {
    Nairobi: "Harambee House",
    Nakuru: "Times Tower",
    Juja: "Hall 6"
}

//object constructor
let house = new Object();

// map constructor
const cars = new Map();

// constructor function
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Tesla", "Model S", 2020)

console.log(myCar)

//prototype
Car.prototype.horse_power = 1000;

Car.prototype.drive = function(){
    console.log("Vroom vroom")
};

console.log(myCar.horse_power)
console.log(myCar.drive())

//inheritance
function ElectricCar(make, model, year){
    Car.call(this, make, model, year);
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

let myElectricCar = new ElectricCar("Tesla", "Model S", 2020)

console.log(myElectricCar.horse_power)

//encapsulation
function BankAccount(balance){
    let _balance = balance;

    this.getBalance = function(){
        return _balance;
    }

    this.deposit = function(amount){
        _balance += amount;
    }

    this.withdraw = function(amount){
        if(_balance >=amount){
            _balance -= amount;
            console.log("Withdrawal successful")
        } else {
            console.log("Insufficient funds")
        }
    }
}

let myAccount = new BankAccount(25000);

console.log(myAccount.getBalance());

myAccount.deposit(35000);

console.log(myAccount.getBalance());

myAccount.withdraw(65000);

console.log(myAccount.getBalance());
