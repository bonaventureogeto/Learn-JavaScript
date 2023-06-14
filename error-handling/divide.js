function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero')
    }

    return a / b;
}

try {
    let result = divide(10, 5);
    console.log(result);
} catch (e) {
    console.log(e.message);
}