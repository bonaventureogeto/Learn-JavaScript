let person = {
  name: "Jane Doe",
  age: 25,
  occupation: "Software Developer",
  citizenship: "Kenyan",
  greetings: function () {
    return("Hello Stanger!");
  },
  family: {
    father: "John Doe",
    mother: "Mary Doe",
    brother: "James Doe",
    sister: "Joy Doe",
  },
  thanks: function () {
    return("Thank you for visiting my profile!");
  },
};

// Accessing object properties

console.log(person.occupation);
console.log(person.thanks());

console.log(person.family.sister);