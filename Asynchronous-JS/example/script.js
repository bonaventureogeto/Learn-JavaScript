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

myPromise.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

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


    // async await