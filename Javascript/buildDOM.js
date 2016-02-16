//*** This function's sole purpose is take the information from JSON and format it ***//
function buildDOM (mbArray) {
	
	//****** ACCESS CURRENT DATE ******//
	var today = new Date();
	var hour = today.getHours();
	var min = today.getMinutes();
	var timeStamp = hour + ":" + min;

	//****** Declare var for build DOM string ******//
	var chatString = "";
	var innerDiv = document.getElementById("inner-container");
	
	//****** Loop through array and add JSON data ******//
	for (var i = 0; i < mbArray.length; i++) { 
		chatString += '<div class="row">';
			chatString += `<div class="col-md-8"><h3>${mbArray[i].user}:</h3><p>${mbArray[i].text}</p> <p>${timeStamp}</p><input type="text" class="userEditInput hidden" autofocus></div>`;
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-info editBtn">Edit</button></div>';
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-danger deleteBtn">Delete</button></div>';
		chatString += '</div>';
	}
	//****** Set inner HTML to the created string ******//
	innerDiv.innerHTML = chatString;

};

//Call loadMessages function with buildDOM as the argument (will initiate the callback [buildDOM()] in messageboard.js)//
Chatty.loadMessage(buildDOM);

