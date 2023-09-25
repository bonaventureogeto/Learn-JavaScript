const fetchJokeWithPromises = (category) => {
  console.log("fetching with promises...");

  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((res) => res.json())
    .then((res) => console.log("res", res))
    .catch((error) => console.error("There was an error!", error));
};

fetchJokeWithPromises("dev");

// write a program that fetches random jokes about fashion from the chucknorris api
