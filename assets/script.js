var totalPoints = 0;
var questionIndex = 0;
var startTime = 90;
var timeInterval = "";
var timeEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz");
var startButton = document.getElementById("start");
var penalty = "10";
var outTime = "You're out of time!";
var createOp = document.createElement("ul");

function playQuiz(questionIndex) {
    createOp.innerHTML = "";
    // quizEl.innerHTML = "";

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
];

//starts the timer
startButton.addEventListener("click", function() {
countdown();
playQuiz(questionIndex);
})

function correctAnswer(event) {
    var element = event.target;
    console.log(element);

    if (element.matches("button")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].correctAnswer) {
            totalPoints ++;
            alert('Correct! ');
        } else {
            startTime = startTime - penalty;
            alert('Incorrect!')
        }
    }

    questionIndex ++;

    if (questionIndex >= questions.length) {
        quizOver();
        createDiv.textContent = "Good work! You got " + totalPoints + " answers correct!";
    } else {
        playQuiz(questionIndex);
    }
    quizEl.appendChild(createDiv);
}

function quizOver() {
    quizEl.innerHTML = "";
    stopCountdown();

    var headEl = document.createElement("h1");
    headEl.setAttribute("id", "headEl");
    headEl.textContent = "Quiz Over!";
    quizEl.appendChild(headEl);

    var rule = document.createElement("p");
    rule.setAttribute("id", "rule");
    quizEl.appendChild(rule);

    if (startTime >= 0) {
        var timeLeft = startTime;
        var parEl = document.createElement("p");
        parEl.textContent = "Your final score is: " + timeLeft;
        quizEl.appendChild(parEl);
    }

    var newLabel = document.createElement("label");
        newLabel.setAttribute("id", "newLabel");
        newLabel.textContent = "Enter your initials: ";
    quizEl.appendChild(newLabel);

    var newInput = document.createElement("input");
        newInput.setAttribute("id", "text");
        newInput.setAttribute("id", "initials");
        newInput.textContent = "";
    quizEl.appendChild(newInput);

    var newSubmit = document.createElement("button");
        newSubmit.setAttribute("type", "submit");
        newSubmit.setAttribute("id", "Submit");
        newSubmit.textContent = 'Submit';
    quizEl.appendChild(newSubmit);

    newSubmit.addEventListener("click", function () {
        var initials = newInput.value;
            if (!initials) {
                alert("Enter your initials")
            } else {
                var finalScore = {
                    initials: initials,
                    score: timeLeft,
                }
                console.log(finalScore);
                var highScore = localStorage.getItem('highScore');
                if (highScore === null) {
                    highScore = [];
                } else {
                    highScore = JSON.parse(highScore);
                }

                    highScore.push(finalScore);
                    var newScore = JSON.stringify(highScore);
                    localStorage.setItem("highScore", newScore);
            }
    })
}

function countdown() {
    timeInterval = setInterval(function() {
    if (startTime >= 1) {
        timeEl.textContent = "Time Left: " + startTime;
        startTime -= 1;
    }
    else if (startTime === 0) {
        timeInterval.textContent = "";
        clearInterval(timeInterval);
        displayMessage();
        quizOver();
    }

    function displayMessage() {
        alert(outTime);
    }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timeInterval);
    timeInterval.textContent = "You're out of time!"
    console.log('countdown stopped');
    console.log(timeInterval);
}

//startButton.onclick = playQuiz();