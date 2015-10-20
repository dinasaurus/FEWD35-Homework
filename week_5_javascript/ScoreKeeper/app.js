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

// added this part in class, didn't do it on my own

document.querySelector("#submit-custom-score")
.addEventListener("click", function(){
	var textScore = document
	document.querySelector("#custom-score").value;
	var numScore = parseInt(textScore);
	score = numScore;

	document.getElementById("score").innerHTML = score + " Points";

});