window.onload = writeMessage;
window.onload = writeAnotherMessage;

function writeMessage() {
	
	var i = user.permissions;
	/*for(var i = 1; i <24 ; i++){
		Console.log(i);*/
	if(confirm("Are you sure you want to do that?")){
		alert("you said yes");
	}
	else{
		alert("you said no");
	}		
//		document.getElementById("helloMessage").innerHTML = "Hello, world!";

}


/*function aFunct() {
	alert("four score and seven years ago");
}
/* function writeAnotherMessage() {
	document.getElementById("secondMessage").innerHTML = "This is the second message";
} */
