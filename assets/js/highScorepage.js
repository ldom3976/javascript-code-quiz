var highScore = document.getElementById("leaderBoard");
var eraseScore = document.getElementById("erase");
var retake = document.getElementById("returnBtn");

eraseScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var highScore = localStorage.getItem("highScore");
highScore = JSON.parse(highScore);
if (highScore !== null) {
    for (var i = 0; i < highScore.length; i++) {
        var createDiv = document.createElement("div");
        createDiv.textContent = highScore[i].initals + " " + highScore[i].score
        createDiv.setAttribute("id", "highScore");
        highScore.appendChild(createDiv);
    }
}

retake.addEventListener("click", function () {
    window.location.replace("./index.html");
})