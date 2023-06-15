function fetchData(callback) {
    setTimeout(() => {
        callback('peanut butter');
    }, 3000);
}

fetchData(function (message) {
    console.log(message);
});

console.log('Data is being fetched...');

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
    }, 3000);
});

console.log(myPromise);