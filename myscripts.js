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

//Question 4
var checkpw = function(){
	var pw = document.getElementById("pw");
	if(pw.value == 12345678){
		document.getElementsByTagName("h1")[0].innerHTML = "changed h1";
	}
	else{
		alert("Incorrect password");
	}
}
document.getElementById("submitbutton").addEventListener("click", checkpw);	

//Question 6
var volume = function(){
	var radius = document.getElementById("radius");
	alert(Math.pow(radius.value, 3) * 4 * Math.PI / 3);
}
document.getElementById("submitbutton1").addEventListener("click", volume);	
