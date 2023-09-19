// global scope
// local scope

let name = "Jake"; // name is global
    
function greet() {
    let number = 357; // number is local
    console.log("Hello,", name);
    console.log(number ** 4);
}

greet();

console.log(name);
console.log(number ** 4);
