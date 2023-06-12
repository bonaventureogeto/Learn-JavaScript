const redColor = document.querySelector(".red")

const blackColor = document.querySelector(".black")

const imageCard = document.querySelector(".product-image")

const feedbackBtn = document.querySelector(".feedback")

const grayColor = document.getElementsByClassName("gray")

const cartButton = document.getElementById("button")

const itemTag = document.getElementsByTagName("h3")[0]

redColor.addEventListener("click", () => {
    cartButton.style.backgroundColor = "red",
    itemTag.style.backgroundColor = "red",
    imageCard.style.backgroundImage = "url('./images/red-benz.jpg')"
})

blackColor.addEventListener("click", () => {
    cartButton.style.backgroundColor = "black",
    itemTag.style.backgroundColor = "black",
    imageCard.style.backgroundImage = "url('./images/black-benz.jpg')"
})

grayColor[0].addEventListener("click", () => {
    cartButton.style.backgroundColor = "gray",
    itemTag.style.backgroundColor = "gray",
    imageCard.style.backgroundImage = "url('./images/gray-benz.png')"
})

// const cart = () => {
//     cartButton.style.display = "none",
//     feedbackBtn.style.display = "block"
// }

cartButton.addEventListener("click", () => {
    cartButton.style.display = "none",
    feedbackBtn.style.display = "block";
})

feedbackBtn.addEventListener("click", () => {
    cartButton.style.display = "block",
    feedbackBtn.style.display = "none";
})