class Car {
    constructor(make, model, IP) {
        this.make = make;
        this.model = model;
        this._IP = IP;
    }

    drive() {
        console.log('Vroom!');
    }

    stop() {
        console.log('Screech!');
    }

    get_IP() {
        return this._IP;
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

const myElectricCar = new ElectricCar('Tesla', 'Model 3', '634.546.23.6.8.0', 310);

console.log(myElectricCar.get_IP());