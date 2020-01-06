//Question 1
var right1 = function(){
	document.getElementById("rightness").innerHTML = "I'm right";
}
var right2 = function(){
	document.getElementById("rightness").innerHTML = "No, I'm right!";
}
document.getElementById("button1").addEventListener("click", right1);
document.getElementById("button2").addEventListener("click", right2);

//Question 2
var myAlert = function(){
	alert("Hey, I told you not to hover over me!");
}
document.getElementById("hover").addEventListener("mouseover", myAlert);
