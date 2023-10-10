function transformArray(arr) {
    // Your code here
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        if (arr[i] % 2 === 0) {
            let doubleEven = arr[i] * 2
            console.log(doubleEven)
        } else if (arr[i] % 2 === 1) {
            let trippleOdd = arr[i] * 3
            console.log(trippleOdd)
        } else if (arr[i] < 0) {
            console.log(!arr[i])
        } else if (arr[i] === 0) {
            console.log(arr[i])
        } else {
            console.log("***************")
        }
    }
}

transformArray([2, 4, 5, 8, 98, 0, -34, 67, 793, 46]);
