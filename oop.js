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
