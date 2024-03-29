// console.log("task1");

// setTimeout(() => console.log("task2"), 3000); // setTimeOut is a higher order function while the arrow function is a callback

// console.log("task3");

// const callbackFunc = () => console.log("Im the callback");

// const higherOrderFunction = (callback) => callback();

// higherOrderFunction(callbackFunc);


// async and await

const fetchJoke = async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    console.log(data)
  } catch (error) {
    console.error("There was an error!", error);
  }
};

fetchJoke();
