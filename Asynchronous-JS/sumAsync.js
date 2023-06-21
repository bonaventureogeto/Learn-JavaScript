/*
    Create a function called sumAsync that takes in two numbers and a callback function.
    The function should add the two numbers together and
    then call the callback function with the result after a random delay between 1 and 5 seconds.
*/

function sumAsync(num1, num2, callback) {
    setTimeout(() => {
        return callback(num1 + num2)
    }, 4000)
}

sumAsync(23, 45, (result) => {
    console.log(result)
})
