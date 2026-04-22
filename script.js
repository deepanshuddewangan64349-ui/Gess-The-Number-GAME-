let gameNum = null;
gameNum = Math.floor(Math.random() * 10) + 1;

let guessNum = null;
let inputVal = document.querySelector("input");
let button = document.querySelector("button");
let msg = document.getElementById("msg");

button.addEventListener("click", () => {
  checkNumber();
});
function checkNumber() {
  guessNum = inputVal.value;
  console.log(gameNum, guessNum);
  if (guessNum > gameNum) {
    msg.innerText = "you giving number is big. please guess again";
  } else if (guessNum < gameNum) {
    msg.innerText = "you giving number is small. please guess again";
  } else {
    msg.innerText = "congratulations, you guess the right number";
  }
}
