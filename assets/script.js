var totalPoints = 0;
var questionIndex = 0;
var startTime = 90;
var timeInterval = "";
var timeEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz");
var startButton = doument.getElementById("start");
var penalty = "10";
var outTime = "";
var createOp = document.createElement("ul");

function playQuiz(questionIndex) {
    createOp.innerHTML = "";
    quizEl.innerHTML = "";

    for (var i=0; i < questions.length; i++) {
        //displays question
        var questionName = questions[questionIndex].question;
        var questionAns = questions[questionIndex].answers;

        quizEl.textContent= questionName;
    }

    questionAns.forEach(function (newButton) {
        var opList = document.createElement("button");
        opList.textContent = newButton;
        quizEl.appendChild(createOp);
        createOp.appendChild(opList);
        opList.addEventListener("click", (correctAnswer));
    })
}

var questions = [
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        correctAnswer: 'console.log',
     },
    {
       question: 'Arrays in JavaScript can be used to store ____',
       answers: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
       correctAnswer: 'all of the above',
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answers: ['strings', 'booleans', 'alerts', 'numbers'],
        correctAnswer: 'alerts',
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        answers: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        correctAnswer: 'curly brackets',
    }
]
