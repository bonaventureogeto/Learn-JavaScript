class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log('Vroom!');
    }

    stop() {
        console.log('Screech!');
    }
}

class ElectricCar extends Car {
    constructor(make, model, range) {
        super(make, model);
        this.range = range;
    }

    charge() {
        console.log('Charging...');
    }
}

const myElectricCar = new ElectricCar('Tesla', 'Model 3', 310);

myElectricCar.charge();