// JavaScript Document
// Textifier
var lorem = "Hey! Here's a list of online tools for generating html code and modifying text or content. The tools are mainly organized around two areas: html tools and text tools.The full list of available online tools is just below with the HTML oriented tools listed at the top. They're all completely free to use online tools. They should work perfectly on most modern computers and mobile devices.Hopefully you find a tool that can help you out";

//pasted function is called when the user pastes into the textarea
function pasted() {
//	if else conditions in javascript
	var content = document.getElementById("content");
	setTimeout(formating, 1000);
	setTimeout(sendToClipboard, 1000);
	btn.innerHTML = "Formatting...";
}

function formating() {
	var content = document.getElementById("content");
	var dirty_text = content.value;
//	remove the newline characters here
	half_clean_text = dirty_text.replace(/(\r\n|\n|\r)/gm," ");
	clean_text = half_clean_text.replace(/\s{2,}/g,' ');
	
//	changes the text in the textarea to the formatted one
	content.value = clean_text;
}

function sendToClipboard() {
//	selects the text to send to clipboard
	var text = document.querySelector(".text_box")
	text.focus();
	text.select();
	
//	copying the contents selected into clipboard
	try {
    	var successful = document.execCommand('copy');
		document.getElementById("btn").innerHTML = "Copied to Clipboard &#10004";
  	} catch (err) {
    	console.log('Oops, unable to copy');
  	}
}

// when the mouse enter the text area
function mouseEnter() {
	document.getElementById("btn").innerHTML = "Format";
}