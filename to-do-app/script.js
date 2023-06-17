const taskInput = document.getElementById('task-input');

const addTaskBtn = document.getElementById("add-task-btn");

const taskList = document.getElementById("task-list");

const clearAllTasksBtn = document.getElementById("clear-task-btn");


// adds a task item to the task list
addTaskBtn.addEventListener('click', function () {

  // gets the task input value
  let taskText = taskInput.value;

  // checks if the task input is not empty
  if (taskText.trim() !== '') {
    const taskItem = document.createElement("li");

    // adds the task item to the task list
    taskList.appendChild(taskItem);

    // adds the task item class
    taskItem.classList.add("task-item");

    // adds the task text to the task item
    taskItem.innerText = taskText;

    // adds the task item event listener
    // taskItem.addEventListener('click', function () {
    //   taskItem.remove();
    // });

    const clearTaskBtn = document.createElement("i");

    // adds the clear task button class
    clearTaskBtn.classList.add("fa-solid", "fa-rectangle-xmark");

    // adds the clear task button to the task item
    taskItem.appendChild(clearTaskBtn);

    // adds the clear task button text
    // clearTaskBtn.innerText = 'Delete';

    // adds the clear task button event listener
    clearTaskBtn.addEventListener("click", function () {
      taskItem.remove();
    });

    // adds the task text to the task item
    // taskItem.innerText = taskText;

    // taskItem.addEventListener('click', function () {
    //   taskItem.remove();
    // });

    // removes the task item when clicked
    clearAllTasksBtn.addEventListener("click", function () {
      taskItem.remove();
    });

    // adds the task item to the task list
    // taskList.appendChild(taskItem);

    // clears the task input
    taskInput.value = "";
  }
});
