//****** BUILD FIRST IIFE ******//
var Chatty = (function () {
 var messageBoardArray = [];

 return {

   //****** GET JSON DATA ******//
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
