const redColor = document.querySelector(".red");

const blackColor = document.querySelector(".black");

const grayColor = document.getElementsByClassName("gray");

const description = document.getElementsByClassName("product-description");

const imageCard = document.querySelector(".product-image");

const feedbackBtn = document.querySelector(".feedback");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];


redColor.addEventListener("click", () => {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = "url('./images/red-benz.jpg')";
    // description[0].style.backgroundColor = "red";
});

blackColor.addEventListener("click", () => {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = "url('./images/black-benz.jpg')";
    // description[0].style.backgroundColor = "black";
});

grayColor[0].addEventListener("click", () => {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = "url('./images/gray-benz.png')";
    // description[0].style.backgroundColor = "gray";
});

cartButton.addEventListener("click", () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
});

