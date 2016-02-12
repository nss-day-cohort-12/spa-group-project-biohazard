// This function's sole purpose is waiting to be triggered by the JSON request to build the DOM
function buildDOM (messageBoardArray) {
	console.log("here we go!");
	console.log("messageBoardArray", messageBoardArray);
	var chatString = "";
	var innerDiv = document.getElementById("inner-container");
	for (var i = 0; i < messageBoardArray.length; i++) { 
		chatString += '<div class="row">';
			chatString += `<div class="col-md-8">${messageBoardArray[i].user}: ${messageBoardArray[i].text}</div>`;
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-info">Edit</button></div>';
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-danger">Delete</button></div>';
		chatString += '</div>';
	}
	innerDiv.innerHTML = chatString;

};


//Call loadMessages function with buildDOM as the argument//
Chatty.loadMessage(buildDOM);

//  <div class="col-md-8">.col-md-8</div>
//  <div class="col-md-4">.col-md-4</div>
// </div>