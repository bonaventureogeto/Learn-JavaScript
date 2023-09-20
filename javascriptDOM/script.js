const box = document.querySelector(".box");
const para1 = document.querySelector("#box-1");

const container = document.getElementsByClassName("container");
const paragraph = document.getElementById("box-1");

const headings = document.querySelector("h2");

const imageCard = document.getElementsByClassName("item-image")[0];
const button = document.getElementsByTagName("button")[0];

/*
    1. Event
    2. Event listener
    3. Event handler
*/

button.addEventListener('click', () => {
    para1.style.backgroundColor = "violet";
    // imageCard.style.backgroundImage = 'url("1.png")';
});
