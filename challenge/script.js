// Task constructor function takes in a title, description, and status as parameters and creates an object with these properties.

function Task(title, description, status) {
    this.title = title;
    this.description = description;
    this.status = status;
}

// TaskList object has an array of tasks and methods to add, edit, and delete tasks.
function TaskList() {
    this.tasks = [];

    this.addTask = function (task) {
        this.tasks.push(task);
    }

    this.editTask = function (index, task) {
        this.tasks[index] = task;
    }

    this.deleteTask = function (index) {
        this.tasks.splice(index, 1);
    }
}

// TaskController object has methods to handle user interactions and update the task list accordingly
function TaskController(taskList) {
    this.taskList = taskList;
    
    this.addTask = function (title, description, status) {
        let task = new Task(title, description, status);
        this.taskList.addTask(task);
    }
    
    this.editTask = function (index, title, description, status) {
        let task = new Task(title, description, status);
        this.taskList.editTask(index, task);
    }
    
    this.deleteTask = function (index) {
        this.taskList.deleteTask(index);
    }
}

// create instances of the Task, TaskList, and TaskController objects and use their methods to add, edit, and delete tasks
let taskList = new TaskList();
let taskController = new TaskController(taskList);

document.getElementById("add-task-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    taskController.addTask(title, description, status);
    updateTaskList();
});

function updateTaskList() {
    let taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = "";
    for (let i = 0; i < taskList.tasks.length; i++) {
        let task = taskList.tasks[i];
        let taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <h3 class="task-title">${task.title}</h3>
            <p class="task-description">${task.description}</p>
            <p class="task-status">${task.status}</>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        taskListElement.appendChild(taskElement);

        taskElement.querySelector(".edit-button").addEventListener("click", function () {
            // code to open a form to edit the task
        });

        taskElement.querySelector(".delete-button").addEventListener("click", function () {
            taskController.deleteTask(i);
            updateTaskList();
        });
    }
}


