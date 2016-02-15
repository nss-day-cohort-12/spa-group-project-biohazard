var Chatty = (function (newChatty) {

	var userInput = document.getElementById("userInput");
	var clearBtn = document.getElementById("clearButton");

	newChatty.activateEvents = function(event) {
		userInput.addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
			Chatty.userInputToDOM();
			}
		});
		document.getElementById("darkTheme").addEventListener("click", function(event) {
			document.body.classList.toggle("darkTheme");
		});
		document.getElementById("largeText").addEventListener("click", function(event) {
			document.body.classList.toggle("largeText");
		});
		document.getElementById("clearButton").addEventListener("click", function(event) {
			var myContainer = document.getElementById("inner-container");
			while (myContainer.firstChild) {
				myContainer.removeChild(myContainer.firstChild);
			}
		});



	};
	return newChatty;
})(Chatty);

Chatty.activateEvents();






