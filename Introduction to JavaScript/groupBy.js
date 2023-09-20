/*
    Write a function called groupBy that takes two parameters: 
    an array of objects and a string that represents a property name. 
    The function should group the objects in the array by the value of the specified property, 
    and return an object where each key is the distinct value of the specified property, 
    and the value is an array of objects that have that property value.
*/


function groupBy(arr, propertyName) {
    const groupedItems = {};
    for (let item of arr) {
        const propertyValue = item[propertyName]

        if (groupedItems[propertyValue] === undefined) {
            groupedItems[propertyValue] = [];   
        }
        groupedItems[propertyValue].push(item);
    }
    // for (let key in groupedItems) {
    //     console.log(key, groupedItems[key]);
    // }
    return groupedItems;
}


let arr = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Chicago" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "Dave", age: 40, city: "Chicago" },
];

console.log(groupBy(arr, "city"));
