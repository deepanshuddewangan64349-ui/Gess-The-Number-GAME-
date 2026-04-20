let gameNum = null;
let guessNum = null;

 gameNum = prompt("please give as game number : ");
 guessNum = prompt("please guess the number :");

 while(guessNum != gameNum){
    if(guessNum > gameNum){
        guessNum = prompt("you giving number is big. please guess again :");
    }else{
        guessNum = prompt("you giving number is small. please guess again :");
        }
 }
 console.log("congratulation, you guess the right number");
 