const second = () => {
  setTimeout(() => {
    console.log("Async, Hey There!");
  }, 2000);
};

const first = () => {
  console.log("Hey, There!");
  second();
  console.log("The end!");
};

first();

function getRecipe() {
  setTimeout(() => {
    const recipeID = [23, 454, 56, 67, 343];
    console.log(recipeID);

    setTimeout(
      (id) => {
        const recipe = {
          title: "Fresh Tomato Pasta",
          publisher: "Bonaventure",
        };
        console.log(`${id}: ${recipe.title}`);
        setTimeout(
          (publisher) => {
            const recipe2 = {
              title: "Italian Pizza",
              publisher: "Bonaventure",
            };
            console.log(recipe);
          },
          1500,
          recipe.publisher
        );
      },
      1500,
      recipeID[2]
    );
  }, 1500);
}

getRecipe();

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([23, 454, 56, 67, 343]);
  }, 1500);
});

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh Tomato Pasta",
          publisher: "Bnaventure",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (pub) => {
        const recipe = {
          title: "Fresh Tomato Pasta",
          publisher: "Bnaventure",
        };
        resolve(`${pub}: ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

async function getRecipeAw() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe[2];
  console.log(recipe);
  const related = await getRelated("Binaventure Ogeto");
  console.log(related);

  return recipe;
}
getRecipeAw().then((result) => console.log(`${result} is the best ever`));

// Using the Fetch API

function getWeather(woeid) {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
  )
    .then((result) => {
      //console.log(result);
      return result.json();
    })
    .then((data) => {
      //console.log(data);
      try {
        const today = data.consolidated_weather[0];
        console.log(
          `Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`
        );
      } catch (error) { 
        console.log(error);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
getWeather(2487956);
getWeather(44418);

async function getWeatherAw(woeid) {
  try {
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    );
    const data = await result.json();
    const today = data.consolidated_weather[0];
    console.log(
      `Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`
    );
  } catch (error) {
    console.log(error);
  }
}

getWeatherAw(2487956);
getWeatherAw(44418);
