var msg1 = document.getElementById('msg1');
var msg2 = document.getElementById('msg2');
var msg3 = document.getElementById('msg3');
var reset = document.getElementById('reset');

var answer = (Math.floor(Math.random() * 100)) + 1;
alert(answer);
var no_of_guesses = 0;
var guesses_num = [];

function play(){
  var user_guess = document.getElementById("guess").value;

  if(user_guess < 1 || user_guess > 100){
    alert("Please, enter  a number between 1 to 100");
  }
  else{
    guesses_num.push(user_guess);
    no_of_guesses += 1;

      if(user_guess < answer){
        alert("Numero bajo");
        msg1.innerHTML = "Your Guess is too low";
        msg2.innerHTML = "No. of Guesses : " + no_of_guesses;
        msg3.innerHTML = "Guessed number are:" + guesses_num;
      }
        else if(user_guess > answer){
          alert("Número alto");
          msg1.innerHTML  = "Your guess is too high";
          msg2.innerHTML  = "No. of guesses : " + no_of_guesses;
          msg3.innerHTML  = "Guessed number are: " + guesses_num;
        }
        else if(user_guess == answer){
          alert("Número correcto");
          msg1.innerHTML  = "Yahhhh you won it!!!";
          msg2.innerHTML  = "The number was " + answer;
          msg3.innerHTML  = "You guessed it in " + no_of_guesses + "guesses.";
          reset.innerHTML = "<button onclick=\"location.reload()\">RESET GAME</button>";
        }
        else {
          alert("Something went wrong!!");
        }
  }
}
