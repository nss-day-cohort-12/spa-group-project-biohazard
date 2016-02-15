var Chatty = (function (newChatty){
	var userInput = document.getElementById("userInput");

	newChatty.userInputToDOM = function (){
		var chatString = "";
		chatString += '<div class="row">';
			chatString += `<div class="col-md-8">${userInput.value}</div>`;
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-info">Edit</button></div>';
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-danger">Delete</button></div>';
		chatString += '</div>';
		// if chatString > 20 delete top message.
		document.getElementById("inner-container").innerHTML += chatString
		userInput.value = "";
	};

	return newChatty;

})(Chatty);

