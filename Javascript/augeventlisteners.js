var Chatty = (function (newChatty) {

	var clearBtn = document.getElementById("clearButton");

	//****** LISTEN TO ALL EVENTS ******//
	newChatty.activateEvents = function(event) {

		//****** Get access to selected user and set it to personValue ******//
		var personValue = "chattyBot";
		$("#feedback-type").change(function(event){
			personValue = $("#feedback-type").val();
		});
		// document.getElementById("feedback-type").addEventListener("change", function(event){
		// 	personValue = document.getElementById("feedback-type").value
		// });
		
		//****** Enter key trigger to put user message to the board ******//
		$("#userInput").keyup(function(event) {
			if (event.keyCode === 13) {
				Chatty.userInputToDOM(personValue);
			}
		});
		// userInput.addEventListener("keyup", function(event) {
		// 	if (event.keyCode === 13) {
		// 		Chatty.userInputToDOM(personValue);
		// 	}
		// });

		//****** Listen for click on clear all and removes all elements from inner-container ******//
		$("#clearButton").click(function(event){
			$("#inner-container").children().remove();
		})
		// document.getElementById("clearButton").addEventListener("click", function(event) {
		// 	var myContainer = document.getElementById("inner-container");
		// 	while (myContainer.firstChild) {
		// 		myContainer.removeChild(myContainer.firstChild);
		// 	}
		// });

		//****** Listen for theme check-boxes to change value ******//
		$("#darkTheme").change(function(event) {
			document.body.classList.toggle("darkTheme");
		});
		// document.getElementById("darkTheme").addEventListener("change", function(event) {
		// 	document.body.classList.toggle("darkTheme");
		// });
		$("#largeText").change(function(event) {
			document.body.classList.toggle("largeText");
		});
		// document.getElementById("largeText").addEventListener("change", function(event) {
		// 	document.body.classList.toggle("largeText");
		// });

		//****** Listen for click on deleteBtn ******//
		$("#inner-container").click(function (event){
			if (event.target.className.indexOf("deleteBtn") >= 0) {
				$(event.target).parents(".row").remove();
			}
		});
		
		// Villain - JavaScript
		// document.getElementById("inner-container").addEventListener("click", function(event){
		// 	console.log("listen for deleteBtn", event.target.className.indexOf("deleteBtn"));
		// 	//****** if innerHTML className exists, run the code. if not, it will return -1 ******//
		// 	// if (event.target.className.indexOf("deleteBtn") >= 0) {
		// 	// 	$(event.target).parents(".row").remove();
		// 	// }
		// });

		//****** Listen for click on editBtn ******//
		$("body").click(function(event){
			if (event.target.className.indexOf("editBtn") >= 0) {
				var editableTextString = $(event.target.parentNode.parentNode.firstChild).children("p")[0].innerHTML;
				$(event.target.parentNode.parentNode.firstChild).children("p").toggle();
				$(event.target.parentNode.parentNode.firstChild).children(".userEditInput").toggleClass("hidden");
				$(event.target.parentNode.parentNode.firstChild).children(".userEditInput").toggleClass("letsTargetThis");
				$(event.target.parentNode.parentNode.firstChild).children(".userEditInput").val(editableTextString);
			} else if (event.target.className.indexOf("editBtn") === -1) {
				console.log("we are trying!");
				$(".letsTargetThis").toggleClass(".hidden")
				//if editUserInput text box does NOT have the class of hidden AND click on body
			//run the code below
			}
		});
	};

		// document.getElementById("inner-container").addEventListener("click", function(event){
		// 	var eventGrandParent = event.target.parentNode.parentNode.firstChild;
		// 	console.log("Listen for editBtn", event.target.className.indexOf("editBtn"));
		// 	//****** if innerHTML className exists, run the code. if not, it will return -1 ******//
		// 	if (event.target.className.indexOf("editBtn") >= 0) {
		// 		//****** Access innerHTML of existing message ******//
		// 		var editableTextString = eventGrandParent.getElementsByTagName("p")[0].innerHTML;
		// 		//****** Show edit box ******//
		// 		event.target.parentNode.parentNode.firstChild.getElementsByClassName("userEditInput")[0].classList.toggle("hidden");
		// 		//****** Set value of edit text box to the current HTML message ******//
		// 		event.target.parentNode.parentNode.firstChild.getElementsByClassName("userEditInput")[0].value = editableTextString;
		// 		//****** Hide current HTML message and timeStamp ******//
		// 		event.target.parentNode.parentNode.firstChild.getElementsByTagName("p")[0].classList.toggle("hidden");
		// 		eventGrandParent.getElementsByTagName("p")[1].classList.toggle("hidden");
		// 	}
		// });



		//****** Listen for Click to Undo Edit Option ******//
		// $("body").click(function(event){
		// 	if event.target.className.indexOf("editBtn"){
		// 		return;
		// 	} else {
		// 		// if
		// 	}
		// })
		
		


		//****** Listen for Enter to Edit The Message ******//
		var editFunctionality = function (event){
			if (event.keyCode === 13) {
				var thisTagNameArray = event.target.parentNode.getElementsByTagName("p");
				var thisEditTag = event.target.parentNode.getElementsByClassName("userEditInput")[0];
				console.log("thisEditTag", thisEditTag);
				console.log("thisTagNameArray", thisTagNameArray);
				var today = new Date();
				var hour = today.getHours();
				var min = today.getMinutes();
				var timeStamp = hour + ":" + min;

				//****** Reset HTML message and toggle hidden elements ******//
				thisTagNameArray[0].innerHTML = event.target.value;
				thisTagNameArray[1].innerHTML = timeStamp;
				console.log("thisTagNameArray[1]", thisTagNameArray[1]);
				$(thisEditTag).toggleClass("hidden");
				$(thisTagNameArray).toggle();
				console.log("thisTagNameArray[1]", thisTagNameArray[1]);
			}
		}

		$("#inner-container").keyup(editFunctionality(event));


		// $("#inner-container").keyup(function(event){
		// 	if (event.keyCode === 13) {
		// 		var thisTagNameArray = event.target.parentNode.getElementsByTagName("p");
		// 		var thisEditTag = event.target.parentNode.getElementsByClassName("userEditInput")[0];
		// 		console.log("thisEditTag", thisEditTag);
		// 		console.log("thisTagNameArray", thisTagNameArray);
		// 		var today = new Date();
		// 		var hour = today.getHours();
		// 		var min = today.getMinutes();
		// 		var timeStamp = hour + ":" + min;

		// 		//****** Reset HTML message and toggle hidden elements ******//
		// 		thisTagNameArray[0].innerHTML = event.target.value;
		// 		thisTagNameArray[1].innerHTML = timeStamp;
		// 		console.log("thisTagNameArray[1]", thisTagNameArray[1]);
		// 		$(thisEditTag).toggleClass("hidden");
		// 		$(thisTagNameArray).toggle();
		// 		console.log("thisTagNameArray[1]", thisTagNameArray[1]);
				
		// 		// event.target.classList.toggle("hidden");
		// 	}
		// });


		// document.getElementById("inner-container").addEventListener("keyup", function(event){
		// 	if (event.keyCode === 13) {
		// 		var thisTagNameArray = event.target.parentNode.getElementsByTagName("p");
		// 		var today = new Date();
		// 		var hour = today.getHours();
		// 		var min = today.getMinutes();
		// 		var timeStamp = hour + ":" + min;

		// 		//****** Reset HTML message and toggle hidden elements ******//
		// 		thisTagNameArray[0].innerHTML = event.target.value;
		// 		thisTagNameArray[1].innerHTML = timeStamp;
		// 		thisTagNameArray[0].classList.toggle("hidden");
		// 		thisTagNameArray[1].classList.toggle("hidden");
		// 		event.target.classList.toggle("hidden");
		// 	}
		// });


	// };
	return newChatty;
})(Chatty);

Chatty.activateEvents();






