/*Add your JavaScript here*/

var storeOutcomes = 0;
var questionCount = 0;
var result = document.getElementById("result");

function answerOne() {
  storeOutcomes = storeOutcomes + 1;
  questionCount = questionCount + 1;
  console.log(storeOutcomes);
  console.log(questionCount);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function answerTwo() {
  storeOutcomes = storeOutcomes + 2;
  questionCount = questionCount + 1;
  console.log(storeOutcomes);
  console.log(questionCount);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

//Accessing each button element + button variables
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var restart = document.getElementById("restart");

//Event listeners
q1a1.addEventListener("click", function() {
  answerOne();
  q1a1.disabled = true;
  q1a2.disabled = true;
});

q1a2.addEventListener("click", function() {
  answerTwo();
  q1a1.disabled = true;
  q1a2.disabled = true;
});

q2a1.addEventListener("click", function() {
  answerOne();
  q2a1.disabled = true;
  q2a2.disabled = true;
});

q2a2.addEventListener("click", function() {
  answerTwo();
  q2a1.disabled = true;
  q2a2.disabled = true;
});

q3a1.addEventListener("click", function() {
  answerOne();
  q3a1.disabled = true;
  q3a2.disabled = true;
});

q3a2.addEventListener("click", function() {
  answerTwo();
  q3a1.disabled = true;
  q3a2.disabled = true;
});

restart.addEventListener("click", restartQuiz);

function updateResult() {
  if (storeOutcomes <= 4) {
    console.log("You have become a ghost! The forest has claimed you.");
    result.innerHTML = "You have become a ghost! The forest has claimed you.";
  }
  else if (storeOutcomes >= 5) {
    console.log("You escaped the haunted forest!");
    result.innerHTML = "You escaped the haunted forest!";
  }
}

function restartQuiz() {
  result.innerHTML = "Your result is...";
  
  storeOutcomes = 0;
  questionCount = 0;
  q1a1.disabled = false;
  q1a2.disabled = false;

  q2a1.disabled = false;
  q2a2.disabled = false;

  q3a1.disabled = false;
  q3a2.disabled = false;
  console.log(storeOutcomes);
  console.log(questionCount);
}
