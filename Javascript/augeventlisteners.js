var Chatty = (function (newChatty) {

	var userInput = document.getElementById("userInput");
	var clearBtn = document.getElementById("clearButton");

	//****** LISTEN TO ALL EVENTS ******//
	newChatty.activateEvents = function(event) {

		//****** Get access to selected user and set it to personValue ******//
		var personValue = "chattyBot";
		document.getElementById("feedback-type").addEventListener("change", function(event){
			personValue = document.getElementById("feedback-type").value
		})
		
		//****** Enter key trigger to put user message to the board ******//
		userInput.addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
			Chatty.userInputToDOM(personValue);
			}
		});

		//****** Listen for click on clear all and removes all elements from inner-container ******//
		document.getElementById("clearButton").addEventListener("click", function(event) {
			var myContainer = document.getElementById("inner-container");
			while (myContainer.firstChild) {
				myContainer.removeChild(myContainer.firstChild);
			}
		});

		//****** Listen for theme check-boxes to change value ******//
		document.getElementById("darkTheme").addEventListener("change", function(event) {
			document.body.classList.toggle("darkTheme");
		});
		document.getElementById("largeText").addEventListener("change", function(event) {
			document.body.classList.toggle("largeText");
		});

		//****** Listen for click on deleteBtn ******//
		document.getElementById("inner-container").addEventListener("click", function(event){
			console.log("listen for deleteBtn", event.target.className.indexOf("deleteBtn"));
			//****** if innerHTML className exists, run the code. if not, it will return -1 ******//
			if (event.target.className.indexOf("deleteBtn") >= 0) {
				// console.log($(".album").parents(".song-container").attr("index"));
				console.log("trial stuff:", $(event.target).parents(".row").remove());

				// event.currentTarget.removeChild(event.target.parentNode.parentNode);
			}
		});

		//****** Listen for click on editBtn ******//
		document.getElementById("inner-container").addEventListener("click", function(event){
			var eventGrandParent = event.target.parentNode.parentNode.firstChild;
			console.log("Listen for editBtn", event.target.className.indexOf("editBtn"));
			//****** if innerHTML className exists, run the code. if not, it will return -1 ******//
			if (event.target.className.indexOf("editBtn") >= 0) {
				//****** Access innerHTML of existing message ******//
				var editableTextString = eventGrandParent.getElementsByTagName("p")[0].innerHTML;
				//****** Show edit box ******//
				eventGrandParent.getElementsByClassName("userEditInput")[0].classList.toggle("hidden");
				//****** Set value of edit text box to the current HTML message ******//
				eventGrandParent.getElementsByClassName("userEditInput")[0].value = editableTextString;
				//****** Hide current HTML message and timeStamp ******//
				eventGrandParent.getElementsByTagName("p")[0].classList.toggle("hidden");
				eventGrandParent.getElementsByTagName("p")[1].classList.toggle("hidden");
			}
		});

		//****** Listen for Enter to Edit The Message ******//
		document.getElementById("inner-container").addEventListener("keyup", function(event){
			if (event.keyCode === 13) {
				var thisTagName = event.target.parentNode.getElementsByTagName("p");
				var today = new Date();
				var hour = today.getHours();
				var min = today.getMinutes();
				var timeStamp = hour + ":" + min;

				//****** Reset HTML message and toggle hidden elements ******//
				thisTagName[0].innerHTML = event.target.value;
				thisTagName[1].innerHTML = timeStamp;
				thisTagName[0].classList.toggle("hidden");
				thisTagName[1].classList.toggle("hidden");
				event.target.classList.toggle("hidden");
			}
		});


	};
	return newChatty;
})(Chatty);

Chatty.activateEvents();






