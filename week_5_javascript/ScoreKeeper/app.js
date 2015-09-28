var score = 0;

var buttons = document.getElementById("increase-5");

buttons.addEventListener("click", function() {
	score = score + 5;
        document.getElementById("score").innerHTML = score + " Points";
    });

buttons = document.getElementById("decrease-5");

buttons.addEventListener("click", function() {
	score = score - 5;
        document.getElementById("score").innerHTML = score + " Points";
    });