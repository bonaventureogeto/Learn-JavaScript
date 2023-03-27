let cardColor = document.querySelectorAll(".card"); // returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors

for (let i = 0; i < cardColor.length; i++){
    cardColor[i].style.backgroundColor = "green";
}
