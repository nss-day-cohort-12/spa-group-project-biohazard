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
				event.currentTarget.removeChild(event.target.parentNode.parentNode);
			}
		});

		document.getElementById("inner-container").addEventListener("click", function(event){
			var eventGrandParent = event.target.parentNode.parentNode.firstChild;
			console.log("click", event.target);
			console.log(event.target.className.indexOf("editBtn"));
			if (event.target.className.indexOf("editBtn") >= 0) {
				var editableTextString = eventGrandParent.getElementsByTagName("p")[0].innerHTML;
				console.log("editableTextString:", editableTextString);
				eventGrandParent.getElementsByClassName("userEditInput")[0].classList.toggle("hidden");
				eventGrandParent.getElementsByClassName("userEditInput")[0].value = editableTextString;
				eventGrandParent.getElementsByTagName("p")[0].classList.toggle("hidden");
			}
		});

		document.getElementById("inner-container").addEventListener("keyup", function(event){
			if (event.keyCode === 13) {
				event.target.parentNode.getElementsByTagName("p")[0].innerHTML = event.target.value
				event.target.parentNode.getElementsByTagName("p")[0].classList.toggle("hidden");
				event.target.classList.toggle("hidden");
			}
		});


	};
	return newChatty;
})(Chatty);

Chatty.activateEvents();






