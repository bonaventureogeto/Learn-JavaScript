const redColor = document.querySelector(".red");

const blackColor = document.querySelector(".black");

const imageCard = document.querySelector(".product-image");

const feedbackBtn = document.querySelector(".feedback");

const grayColor = document.getElementsByClassName("gray")[0];

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

redColor.addEventListener("click", function(){
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("benz-3.webp")';
});

grayColor.addEventListener("click", function(){
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("benz-2.jpg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("benz-4.jpg")';
});
