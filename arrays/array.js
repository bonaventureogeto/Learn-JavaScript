arr = new Array(1, 2, 4, 8);
function manipulateArray(arr) {
  const new_Array = arr
    .filter((a) => a % 2 === 0)
    .map((a) => a * a) //square of a number
    .reduce((a, b) => a + b);
  return new_Array;
}

console.log(manipulateArray(arr));