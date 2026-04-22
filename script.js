let gameNum = null;
gameNum = Math.floor(Math.random() * 100) + 1;

let guessNum = null;
let inputVal = document.querySelector("input");
let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");
let msg = document.getElementById("msg");

submitBtn.addEventListener("click", () => {
  msg.innerText = "";
  setTimeout(() => {
    guessNum = inputVal.value;
    if (guessNum > gameNum) {
      msg.innerText = "you giving number is big. please guess again";
    } else if (guessNum < gameNum) {
      msg.innerText = "you giving number is small. please guess again";
    } else {
      msg.innerText = "congratulations, you guess the right number";
    }
  }, 100);
});

resetBtn.addEventListener("click", () => {
  msg.innerText = "";
  inputVal.value = "0";
  gameNum = Math.floor(Math.random() * 100) + 1;
});
