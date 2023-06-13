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
myCar.greeting();