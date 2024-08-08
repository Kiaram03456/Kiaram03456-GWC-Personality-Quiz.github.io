var IntrovertCount = 0;
var ExtrovertCount = 0;
var QuestionCount = 0;

var results = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart");

q1a1.addEventListener("click", introvert);
q1a2.addEventListener("click", extrovert);

q2a1.addEventListener("click", extrovert);
q2a2.addEventListener("click", introvert);

q3a1.addEventListener("click", extrovert);
q3a2.addEventListener("click", introvert);
restart.addEventListener("click", restartpage)

function introvert() {
  IntrovertCount += 1;
  QuestionCount += 1;
  console.log("IntrovertCount = " + IntrovertCount + " QuestionCount = " + QuestionCount);
  if (QuestionCount == 3) {
    console.log("The Quiz is Done!");
    updateresult();
  }
}

function extrovert() {
  ExtrovertCount += 1;
  QuestionCount += 1;
  console.log("ExtrovertCount = " + ExtrovertCount + " QuestionCount = " + QuestionCount);
  if (QuestionCount == 3) {
    console.log("The Quiz is Done!");
    updateresult();
  }
}

function updateresult(){
  if (ExtrovertCount >=2){
    console.log("You are an Extrovert");
    results.innerHTML = "You're an Extrovert";

  } else if (IntrovertCount >=2) {
    console.log("You are an Introvert");
    results.innerHTML = "You're are an Introvert";
  }
}

function restartpage() {
  IntrovertCount = 0;
  ExtrovertCount = 0;
  QuestionCount = 0;
  results.innerHTML = "You're are an ...";
}
