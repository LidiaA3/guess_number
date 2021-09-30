var msg1 = document.getElementById('msg1');
var msg2 = document.getElementById('msg2');
var msg3 = document.getElementById('msg3');
var reset = document.getElementById('reset');

var answer = (Math.floor(Math.random() * 100)) + 1;
var no_of_guesses = 0;
var guesses_num = [];

function comprobarPulsadoEnter (evento) {
    if (evento.code == 'Enter') {
        comprobarLetraUsuario();
    }
}

function play(){
  var user_guess = document.getElementById("guess").value;
  document.getElementById("guess").value = "";
  document.getElementById("guess").focus();

  if(user_guess < 1 || user_guess > 100){
    alert("Por favor introduce un número del 1 al 100");
  }
  else{
    guesses_num.push(user_guess);
    no_of_guesses += 1;

      if(user_guess < answer){
        msg1.innerHTML = "Tu intento es muy bajo";
        msg2.innerHTML = "No. de intentos : " + no_of_guesses;
        msg3.innerHTML = "Wrong Numbers:" + guesses_num;
      }
        else if(user_guess > answer){
          msg1.innerHTML = "Tu intento es muy alto";
          msg2.innerHTML = "No. de intentos : " + no_of_guesses;
          msg3.innerHTML = "Wrong Numbers: " + guesses_num;
        }
        else if(user_guess == answer){
          msg1.innerHTML = "Yahhhh lo conseguiste!!!";
          msg2.innerHTML = "El número era " + answer;
          msg3.innerHTML = "Lo adivinaste en " + no_of_guesses + " intentos.";
          reset.innerHTML = "<button onclick=\"location.reload()\">RESET</button>";
        }
        else {
          alert("Algo fue mal!!");
        }
  }
}
