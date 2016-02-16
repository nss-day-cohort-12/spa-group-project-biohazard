var Chatty = (function (newChatty){
	var userInput = document.getElementById("userInput");

	newChatty.userInputToDOM = function (pValue){
		console.log("value", pValue);

		var today = new Date();
		var hour = today.getHours();
		var min = today.getMinutes();
		var timeStamp = hour + ":" + min;

		var chatString = "";
		chatString += '<div class="row">';
			chatString += `<div class="col-md-8"><h3>${pValue}:</h3><p>${userInput.value} ${timeStamp}</p><input type="text" class="userEditInput hidden"></div>`;
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-info editBtn">Edit</button></div>';
			chatString += '<div class="col-md-2"><button type="button" class="btn btn-danger deleteBtn">Delete</button></div>';
		chatString += '</div>';
		// if chatString > 20 delete top message.
		document.getElementById("inner-container").innerHTML += chatString
		userInput.value = "";
	};

	return newChatty;

})(Chatty);

console.log(Date.prototype.getDay());



// chatString += '<div class="row">';
// 			chatString += `<div class="col-md-8"><h3>${mbArray[i].user}:</h3><p>${mbArray[i].text}</p><input type="text" class="userEditInput hidden" autofocus></div>`;
// 			chatString += '<div class="col-md-2"><button type="button" class="btn btn-info editBtn">Edit</button></div>';
// 			chatString += '<div class="col-md-2"><button type="button" class="btn btn-danger deleteBtn">Delete</button></div>';
// 		chatString += '</div>';