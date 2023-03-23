const redColor = document.querySelector(".red");

const blackColor = document.querySelector(".black");

const imageCard = document.querySelector(".product-image");

const feedbackBtn = document.querySelector(".feedback");

const grayColor = document.getElementsByClassName("gray");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

redColor.addEventListener("click", function(){
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("benz-3.webp")';
});

