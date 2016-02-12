var Chatty = (function () {
 var messageBoardArray = [];

 return {
   getMessage: function () {
   },
   loadMessage: function (callback) {
     var messageBoardLoader = new XMLHttpRequest();

     messageBoardLoader.addEventListener("load", function () {
       var messageBoardData = JSON.parse(this.responseText);
       messageBoardArray = messageBoardData.chats;

       //Here is where we use callback (now the function buildDOM) with the argument of messageBoardArray//
       callback(messageBoardArray);

     });
     messageBoardLoader.open("GET", "messages.json")
     messageBoardLoader.send();
   }
 };

})();


      //*****HERE LIES bildDOM.js*****//
// function buildDOM (messageBoardArray) {
//   console.log("here we go!");
//   console.log("messageBoardArray", messageBoardArray);
// };

// //Call loadMessages function with buildDOM as the argument//
// Chatty.loadMessages(buildDOM);