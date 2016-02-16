// This function's sole purpose is waiting to be triggered by the JSON request to build the DOM
function buildDOM (mbArray) {
	console.log("mbArray", mbArray);
	
	var today = new Date();
	var hour = today.getHours();
	var min = today.getMinutes();
	var timeStamp = hour + ":" + min;

	var chatString = "";
	var innerDiv = document.getElementById("inner-container");
	for (var i = 0; i < mbArray.length; i++) { 
		chatString += '<div class="row">';
			chatString += `<div class="col-md-8"><h3>${mbArray[i].user}:</h3><p>${mbArray[i].text} ${timeStamp}</p><input type="text" class="userEditInput hidden" autofocus></div>`;
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-info editBtn">Edit</button></div>';
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-danger deleteBtn">Delete</button></div>';
		chatString += '</div>';
	}
	innerDiv.innerHTML = chatString;

};


//Call loadMessages function with buildDOM as the argument//
Chatty.loadMessage(buildDOM);

//  <div class="col-md-8">.col-md-8</div>
//  <div class="col-md-4">.col-md-4</div>
// </div>