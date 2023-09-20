const redColor = document.querySelector('.red');
const grayColor = document.querySelector('.gray');
const blackColor = document.querySelector('.black');

const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByClassName("tag")[0];


redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./red-benz.jpg")'
})

grayColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./grey-benz.png")';
});

blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./black-benz.jpg")';
});