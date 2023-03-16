// Code containing questions

var questions = [
    {
      question: "Which of the following is used to define a function in JavaScript?",
      answers: {
        a: "def",
        b: "function",
        c: "var",
        d: "let"
      },
      correctAnswer: "b"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        answers: {
          a: "Number",
          b: "String",
          c: "Boolean",
          d: "Character"
        },
        correctAnswer: "d"
      },
      {
        question: "Which of the following is used to select an HTML element by its id in JavaScript?",
        answers: {
          a: "querySelector",
          b: "getElementById",
          c: "getElementsByClassName",
          d: "getElementsByTagName"
        },
        correctAnswer: "b"
      },
      {
        question: "Which of the following is used to loop through the elements of an array in JavaScript?",
        answers: {
          a: "while loop",
          b: "for loop",
          c: "do-while loop",
          d: "switch-statement"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the purpose of the this keyword in JavaScript?",
        answers: {
          a: "To refer to the current function",
          b: "To refer to the global object",
          c: "To refer to the parent object",
          d: "To refer to the current object"
        },
        correctAnswer: "d"
      }
  ];

  //Variables 
var totalScore = 0;
var quizSection = document.querySelector("#quizSection");
var answers = document.querySelector("#answerSection")
var startQuiz = document.querySelector("#startQuiz");
var viewHighScore = document.querySelector("#viewHighScore");
var timer = document.querySelector("#timeLeft");


//Eventlistener to start quiz/timer  
startQuiz.addEventListener("click", function () {
    setTime();
    displayQuestion(0);
});

//Creating function to display questions/answers
function displayQuestion(index) {
  if (index < questions.length) {
    quizSection.innerHTML = "";
    answers.innerHTML = "";

    var currentQuestion = questions[index];
    quizSection.textContent = currentQuestion.question;

    for (var key in currentQuestion.answers) {
      var answerOption = document.createElement("button");
      answerOption.textContent = key.toUpperCase() + ": " + currentQuestion.answers[key];
      answerOption.setAttribute("data-answer", key);
      answerOption.classList.add("answer-button");
      answers.appendChild(answerOption);
    }

    var answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(function (button) {
      button.addEventListener("click", function (event)  {
        var userAnswer = event.target.getAttribute("data-answer");
        if (userAnswer === currentQuestion.correctAnswer) {
          window.alert("Correct!");

        }
        displayQuestion(index + 1);
      });
    });
  } else {
timer.textContent = "Quiz complete!";

}
}



  
  
  
  
  
  
  
  //Event Listener to start Timer
  
  var secondsLeft = 60;

  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
       
        clearInterval(timerInterval);
        timer.textContent = "Game over!";
        }
  
    }, 1000);
  }
  
