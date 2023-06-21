const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const body = document.querySelector(".body");


function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function changeBackground(){
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};

btn1.addEventListener('click', changeBackground);

body.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});

btn2.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});