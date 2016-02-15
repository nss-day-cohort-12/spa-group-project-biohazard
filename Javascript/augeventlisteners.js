var Chatty = (function (newChatty) {

	var userInput = document.getElementById("userInput");
	var clearBtn = document.getElementById("clearButton");

	newChatty.activateEvents = function(event) {
		userInput.addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
			Chatty.userInputToDOM();
			}
		});
		document.getElementById("clearButton").addEventListener("click", function(event) {
			var myContainer = document.getElementById("inner-container");
			while (myContainer.firstChild) {
				myContainer.removeChild(myContainer.firstChild);
			}
		});
		document.getElementById("darkTheme").addEventListener("click", function(event) {
			document.body.classList.toggle("darkTheme");
		});
		document.getElementById("largeText").addEventListener("click", function(event) {
			document.body.classList.toggle("largeText");
		});
		document.getElementById("inner-container").addEventListener("click", function(event){
			console.log("click", event.target);
			console.log(event.target.className.indexOf("deleteBtn"));
			if (event.target.className.indexOf("deleteBtn") >= 0) {
				event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
			}
		});




	};
	return newChatty;
})(Chatty);

Chatty.activateEvents();






