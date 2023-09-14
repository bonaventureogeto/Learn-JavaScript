// fetching data from the forkify api using fetch

let url =
  "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886";

let getFood = () => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => console.log("res", res));
};
