function fetchData(callback) {
    setTimeout(() => {
        callback("peanut butter");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

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
        resolve("Hello from the promise!");
    }, 2000);
});

console.log(myPromise);