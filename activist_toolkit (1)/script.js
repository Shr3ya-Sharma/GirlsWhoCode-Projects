/* .js files add interaction to your website */

var message = document.getElementById("message");
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", displayMessage);

function displayMessage() {
  var userAnswer = document.getElementById("environmentInput").value;
  message.innerHTML = "You chose to protect " + userAnswer + ". Every voice matters!";
}