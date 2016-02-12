var Chatty = (function (newChatty) {

	var userInput = document.getElementById("userInput");
	var clearBtn = document.getElementById("clearButton");

	newChatty.activateEvents = function(event) {
		userInput.addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
			Chatty.userInputToDOM();
			}
		});
	};
	return newChatty;
})(Chatty);

Chatty.activateEvents();






