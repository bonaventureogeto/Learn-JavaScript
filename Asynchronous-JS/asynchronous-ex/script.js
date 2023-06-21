// function fetchData(callback) {
//     setTimeout(() => {
//         callback('peanut butter');
//     }, 3000);
// }

// fetchData(function (message) {
//     console.log(message);
// });

// console.log('Data is being fetched...');

// callback hell
// getData(function (a) {
//   getMoreData(a, function (b) {
//     getEvenMoreData(b, function (c) {
//       getEvenEvenMoreData(c, function (d) {
//         getFinalData(d, function (finalData) {
//           console.log(finalData);
//         });
//       });
//     });
//   });
// });

// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('peanut butter');
    }, 300);
});

// console.log(myPromise);

// myPromise.then((result) => {
//     console.log(result);
// })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('finally');
//     });

// fetch API

const urls = [
    "https://api.github.com/users/bonaventureogeto",
    "https://api.github.com/users/brad",
    "https://api.github.com/users/john"
]


function fetchAndDisplay(urls) {
    urls.map((url) => fetch(url)
        .then((response) => response.json())
        .then((data) => {
            try {
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })
        .catch((error) => {
            console.log(error);
        })
)}

fetchAndDisplay(urls);


fetch("https://api.github.com/users/bonaventureogeto")
  .then((response) => response.json())
  .then((data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => {
    console.log(error);
  });


// let promise1 = fetch("https://api.github.com/users/bonaventureogeto");
// let promise2 = fetch("https://api.github.com/users/brad");
// let promise3 = fetch("https://api.github.com/users/john");

// Promise.all([promise1, promise2, promise3])
//     .then((response) => {
//         console.log(response);
//     })


// async await
    
// async function getData() {
//     const response = await fetch("https://api.github.com/users/bonaventureogeto");
//     const data = await response.json();
//     console.log(data);
// }

// getData();


function students() {
    return("Hello, I'm a student at Zindua!")
}

function occupation() {
    return("I'm a Software Developer")
}

async function personInfo() {
    const student = await students();
    console.log(student);

    const career = await occupation();
    console.log(career)
}

personInfo();