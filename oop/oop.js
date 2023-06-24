function Car(make, model) {
    this.make = make;
    this.model = model;
    this.year = new Date().getFullYear();
}

let myCar = new Car('Ford', 'Mustang');
console.log(myCar);

Car.prototype.greeting = function () {
    console.log("Hello, World!")
}

Car.prototype.drive = function () {
    console.log("Vroom, Vroom!")
}

myCar.greeting();
myCar.drive();