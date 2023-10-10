const myTask = document.getElementsByTagName("li");

const myTasks = document.getElementById('tasks');

const myDesc = document.getElementById('desc');

let tasks = ['Laundry', 'Cooking', 'Shopping'];

myTask[0].textContent = tasks[0]
myTask[1].textContent = tasks[1]
myTask[2].textContent = tasks[2];

myDesc.innerHTML = 'Organize your work today'
