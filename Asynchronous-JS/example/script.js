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

fetch("https://fakestoreapi.com/products/1")
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


// let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
// let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
// let promise3 = fetch("https://jsonplaceholder.typicode.com/posts/3");

// Promise.all([promise1, promise2, promise3])
//     .then((responses) => {
//         console.log(responses);
//     })

// async await
    
async function getData() {
    const response = await fetch("https://api.github.com/users/bonaventureogeto");
    const data = await response.json();
    console.log(data);
}

getData();