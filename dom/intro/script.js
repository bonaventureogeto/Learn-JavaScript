// JavaScript code goes here
const title = document.getElementsByClassName('title')

const description = document.getElementById('description')

const greeting = document.getElementsByTagName('h2')

const myTitle = document.querySelectorAll('.title')

const myDescription = document.querySelector('#description')

const myName = document.getElementById('name')

const myAge = document.getElementById('age')

const myTask = document.getElementsByTagName('li')

// console.log(title);
// console.log(myTitle);
// console.log(description);
// console.log(greeting);

description.textContent = "This is a description!"
myName.textContent = "My name is John Doe!"

for (let i = 0; i < title.length; i++){
    title[i].style.backgroundColor = "yellow";
    title[0].style.fontSize = "20px";
}

let age = document.createElement('p')
age.textContent = "I'm 20 years Old"

document.body.appendChild(age);

// Create a basic to-do list application where you can add tasks using the textContent method
myTask[0].textContent = "Do Laundry"