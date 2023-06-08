// objects

let person = {
  name: "John",
  age: 32,
  occupation: "Software Engineer",
  status: "Married",
  family: {
    wife: "Jane",
    son: "John Jr.",
    daughter: "Jenny"
  },
  greetings: function () {
    return("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}


// acessing object properties
console.log(person.greetings());