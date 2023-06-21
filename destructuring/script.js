const user = {
  firstname: "John",
  lastname: "Doe",
  address: "15 Avenue Westlands",
    age: 43,
    family: {
        father: "John Doe Sr",
        mother: "Jane Doe",
        sisters: {
            sister1: "Jane Doe Jr",
            sister2: "Janet Doe"
        }
  }
};

const { firstname, lastname, fullname=`${firstname} ${lastname}`, address, age, salary=345345, family:{sisters:{sister1, sister2}} } = user;

console.log(fullname, address, age, salary); // John 15 Avenue Westlands 43 345345

// destructurung function arguments