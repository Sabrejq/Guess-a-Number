
var random_Number =  Math.round(Math.random()*40);
console.log(random_Number);

function myGuessNumber() {
    var guess = document.querySelector('#myGuess').value;
    var reply = document.querySelector('#reply');
  var correctNumber = random_Number;

 if (guess > correctNumber){
   reply.innerHTML = "Too high! Try with a lower number than " + guess;
 }
 else if (guess < correctNumber){
 reply.innerHTML = "Too low! Try with a higher number than " + guess;

 }
else {
  reply.innerHTML = "You guessed the number :)"
}

}
