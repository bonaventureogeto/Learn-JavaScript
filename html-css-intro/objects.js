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

// weather object
let weather = {
  temperature: 32,
  humidity: 80,
  windSpeed: 20,
  windDirection: "North",
  precipitation: "Rain",
  forecast: function () {
    return("The weather today is " + this.precipitation + "y with a temperature of " + this.temperature + " degrees celcius.");
  },
  temperatureConverter: function () {
    return(this.temperature * 9 / 5 + 32);
  }
}