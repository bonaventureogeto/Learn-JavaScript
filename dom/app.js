let title = document.getElementById("title"); // returns the element with the given ID

title.innerHTML = "The most common way to access a DOM element is by its ID attribute. You can use the document.getElementById() method to get the element with a specific ID:";

// alert('Hello World');

let heading = document.getElementsByTagName("h3"); // returns an array-like collection of elements with the given tag name

heading[0].innerHTML = "The most common way to access a DOM element is by its ID attribute. You can use the document.getElementById() method to get the element with a specific ID:";

let something = document.getElementsByClassName("something"); // returns an array-like collection of elements with the given class name

something[0].textContent = "You can also access elements by their class name using the document.getElementsByClassName() method. This method returns an array-like collection of elements with the given class name";

let button = document.getElementsByTagName("button"); // returns an array-like collection of elements with the given tag name

button[0].onclick = function () {
  alert("You clicked me!");
};

let myDiv = document.getElementsByClassName("myDiv"); // returns an array-like collection of elements with the given class name

for (let i = 0; i < myDiv.length; i++) {
  myDiv[i].style.backgroundColor = "green";
}

let title1 = document.createElement("h1"); // creates a new element with the given tag name

title1.textContent = "Africa is a beautiful continent";
document.body.appendChild(title1); // appends the given element to the end of the list of children of the given parent node
