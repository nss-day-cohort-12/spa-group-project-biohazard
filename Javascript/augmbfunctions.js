//****** Augmented IIFE ******//
var Chatty = (function (newChatty){

	//****** Access the user input as a variable ******//
	var userInput = document.getElementById("userInput");

	//****** BUILD NEW MESSAGE: Create a new key-value pair that builds new message to the DOM ******//
	newChatty.userInputToDOM = function (pValue){
		var today = new Date();
		var hour = today.getHours();
		var min = today.getMinutes();
		var timeStamp = hour + ":" + min;

		//****** Build new string to post to DOM ******//
		var chatString = "";
		chatString += '<div class="row">';
			chatString += `<div class="col-md-8"><h3>${pValue}:</h3><p>${userInput.value}</p> <p>${timeStamp}</p><input type="text" class="userEditInput hidden"></div>`;
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-info editBtn">Edit</button></div>';
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-danger deleteBtn">Delete</button></div>';
		chatString += '</div>';
		document.getElementById("inner-container").innerHTML += chatString
		userInput.value = "";
	};

	return newChatty;

})(Chatty);
