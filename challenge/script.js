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
