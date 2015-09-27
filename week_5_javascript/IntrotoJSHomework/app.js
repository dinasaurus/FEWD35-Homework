
for (var i = 0; i < 21; i++) {
  if (i % 2 == 0)
		console.log (i + " is even");
	else
		console.log (i + " is odd");

}

var i = 0; 
while (i < 21) {
	if (i % 2 == 0)
		console.log (i + " is even");
	else
		console.log (i + " is odd");
	i++;

}

var num1 = 34;

var num2 = 409803;

function max(num1, num2){
	if (num1 < num2) 
		return num2;
	else 
		return num1;
}

console.log ("larger number of 34 and 409803 is " + max(num1, num2));



function maxof3(num1, num2, num3){

return Math.max (num1, num2, num3);
}

console.log (maxof3(33, 34, 35));

