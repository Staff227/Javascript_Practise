let textHolder = document.getElementById("textHolder");
let button = document.getElementById("button");
let entry;
let password = "0244025454"; 





textHolder.placeholder = "Enter password";






button = document.addEventListener("click", function(){
        if(password !== textHolder.value){
            textHolder.placeholder = "";
            textHolder.style.borderColor = "red"; 
            textHolder.value = "";
        }else{
            let body = document.body;
        h1 = document.createElement("h1");
        h1.innerHTML = textHolder.value;
        body.append(h1);
        textHolder.value = "";
        }
        
    
})