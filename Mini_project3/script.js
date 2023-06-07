let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let button = document.getElementById("button");
let clear = document.getElementById("clear");



button.addEventListener("click", function (){
    let newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
    });

clear.addEventListener("click", function(){
    messages = "";


});

