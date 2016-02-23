var Chatty = (function (newChatty) {

	var clearBtn = document.getElementById("clearButton");

	//****** LISTEN TO ALL EVENTS ******//
	newChatty.activateEvents = function(event) {

		//****** Get access to selected user and set it to personValue ******//
		var personValue = "chattyBot";
		$("#feedback-type").change(function(event){
			personValue = $("#feedback-type").val();
		});
		
		//****** Enter key trigger to put user message to the board ******//
		$("#userInput").keyup(function(event) {
			if (event.keyCode === 13) {
				Chatty.userInputToDOM(personValue);
			}
		});

		//****** Listen for click on clear all and removes all elements from inner-container ******//
		$("#clearButton").click(function(event){
			$("#inner-container").children().remove();
		})

		//****** Listen for theme check-boxes to change value ******//
		$("#darkTheme").change(function(event) {
			document.body.classList.toggle("darkTheme");
		});
		$("#largeText").change(function(event) {
			document.body.classList.toggle("largeText");
		});

		//****** Listen for click on deleteBtn ******//
		$("#inner-container").click(function (event){
			if (event.target.className.indexOf("deleteBtn") >= 0) {
				$(event.target).parents(".row").remove();
			}
		});
		
		//****** Listen for click on editBtn ******//
		$("body").click(function(event){

			//*** Loop through text input fields to determine which one is displayed ***//
			var editBoxArray = $(".userEditInput");
			for (var i = 0; i < editBoxArray.length; i++) {
				if (editBoxArray[i].className.indexOf("hidden") === -1) {
					//*** Get access to the current open text input ***//
					var currentEl = editBoxArray[i];
				};	
			};
			//*** Check the target's class ***//
			if (event.target.className.indexOf("editBtn") >= 0) {
				//*** Define a var as the current message ***//
				var editableTextString = $(event.target.parentNode.parentNode.firstChild).find(".pTagEditString").html();
				console.log("editableTextString", editableTextString);
				var grandParent = $(event.target.parentNode.parentNode.firstChild)
				//*** Toggle the div and text input elements ***//
				grandParent.find(".allPTags").toggle();
				grandParent.children(".userEditInput").toggleClass("hidden");
				grandParent.children(".userEditInput").val(editableTextString);
			
			//*** Deal with clicking outside the edit box ***//
			} else if (event.target.className.indexOf("editBtn") === -1 && event.target.className.indexOf("userEditInput")) {
				//*** Set the edited message to a variable ***//
				var editedMessage = $(currentEl).val()
				//*** Set the pTag to be equal to the edited text ***//
				var currentPTag = $(currentEl).siblings(".allPTags").children(".pTagEditString");
				console.log("currentPTag", currentPTag);
				$(currentPTag).html(editedMessage);
				
				//*** Toggle the hidden classes to show the new message ***//
				$(currentEl).toggleClass("hidden");
				$(currentEl.parentNode).children(".allPTags").toggle();
			}
		});
	};

	//****** Listen for Enter to Edit The Message ******//
	var editFunctionality = function (event){
		//*** Get access to the div that will be revealed with the new message ***//
		var divToReveal = $(event.target.parentNode).find(".allPTags");
		//*** Get access to the tag where the new message HTML will go ***//
		var getNewPforMessage = $(event.target.parentNode).find(".pTagEditString");
		console.log("getNewPforMessage", getNewPforMessage.html());
		//*** Get access to updated message ***//
		var userMessageEditText = $(event.target.parentNode).find(".userEditInput")
		//*** Set html to the updated message ***//
		getNewPforMessage.html(userMessageEditText.val())

		
		var today = new Date();
		var hour = today.getHours();
		var min = today.getMinutes();
		var timeStamp = hour + ":" + min;

		//****** Reset HTML message and toggle hidden elements ******//
		$(divToReveal).toggle();
		$(userMessageEditText).toggleClass("hidden");
	}
	

	$("#inner-container").keyup(function(event) {
		if (event.keyCode === 13) {
			editFunctionality(event);
		};
	});

	return newChatty;
})(Chatty);

Chatty.activateEvents();






