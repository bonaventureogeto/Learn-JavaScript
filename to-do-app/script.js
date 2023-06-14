const taskInput = document.getElementById('task-input');

const addTaskBtn = document.getElementById("add-task-btn");

const taskList = document.getElementById("task-list");

const clearTaskBtn = document.getElementById("clear-task-btn");


// adds a task item to the task list
addTaskBtn.addEventListener('click', function () {

  // gets the task input value
  let taskText = taskInput.value;

  // checks if the task input is not empty
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');

    // adds the task text to the task item
    taskItem.innerText = taskText;

    taskItem.addEventListener('click', function () {
      taskItem.remove();
    });

    // removes the task item when clicked
    clearTaskBtn.addEventListener('click', function () {
      taskItem.remove();
    });

    // adds the task item to the task list
    taskList.appendChild(taskItem);

    // clears the task input
    taskInput.value = '';

  }
});
