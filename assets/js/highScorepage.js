var mainEl = document.getElementById("main");
var highScore = document.getElementById("highScore");
var eraseScore = document.getElementById("erase");
var retake = document.getElementById("returnBtn");

//clears scores
eraseScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

//having issues getting high scores to show up on page, will continue to debug
var highScore = function () {
var highScore = localStorage.getItem('highScore');
highScore = JSON.parse(highScore);
if (highScore !== null) {
    for (var i = 0; i < highScore.length; i++) {
        var createDiv = document.createElement("div");
        createDiv.textContent = highScore[i].initials + " " + highScore[i].score;
        createDiv.setAttribute("id", "highScore")
        highScore.appendChild(createDiv);
        }
highScore();
}
}

//redirects to quiz
retake.addEventListener("click", function () {
    window.location.replace("./index.html");
})