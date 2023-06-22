// const user1 = {
//   firstname: "John",
//   lastname: "Doe",
//   address: "15 Avenue Westlands",
//     age: 43,
//     family: {
//         father: "John Doe Sr",
//         mother: "Jane Doe",
//         sisters: {
//             sister1: "Jane Doe Jr",
//             sister2: "Janet Doe"
//         }
//   }
// };

// const { firstname, lastname, fullname =
//   `${firstname} ${lastname}`, address, age, salary = 345345,
//   family: { sisters: { sister1, sister2 } } } = user1;

// console.log(fullname, address, age, salary); // John 15 Avenue Westlands 43 345345

// destructurung function arguments

const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  family: {
    father: "John Doe Sr",
    mother: "Jane Doe",
    sisters: {
      sister1: "Jane Doe Jr",
      sister2: "Janet Doe",
    }
  }
};

function logDetails({ name, age }) {
  // console.log(`${name} is ${age} years old.`);
}

logDetails(user); // Alex is 43 years old.

// Destructure Function Return Value
const getUser = () => {
  return {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  };
};

// const { name, age } = getUser();

// console.log(name, age); // Alex 43

// Destructure in Loops

const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for(const { name, address } of users) {
  // console.log(`${name} lives in ${address}.`);
}

// destructuring the console object
const { log, warn, error } = console;

log("This is a log message.");
warn("This is a warning message.");
error("This is an error message.");

// Destructuring Arrays
const arr = [1, 2, 3, 4, 5];

const [first, second, third] = arr;

// console.log(first, second, third); // 1 2 3

// spread operator
const clone = { ...user, occupation: "developer", age: 100 };

// console.log(clone); // { name: 'Alex', address: '15th Park Avenue', age: 43, occupation: 'developer' }

const updatedUser = {
  ...user,
  family: {
    ...user.family,
    sisters: {
      ...user.family.sisters,
      sister1: "Mary Leakey",
      sister2: "Janet Jackson"
    }
  }
};

// console.log(updatedUser)

// Combine (or Merge) two Objects
const mergedUsers = { ...user, ...users };

// console.log(mergedUsers);


// Rest Operator
const { name, ...rest } = user;

console.log(name, rest);
