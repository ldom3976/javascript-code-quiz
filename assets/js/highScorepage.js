var mainEl = document.getElementById("main");
var eraseScore = document.getElementById("erase");
var retake = document.getElementById("returnBtn");

eraseScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});



retake.addEventListener("click", function () {
    window.location.replace("./index.html");
})