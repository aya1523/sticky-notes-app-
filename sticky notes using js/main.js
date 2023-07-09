var container = document.querySelector(".container");
var addbtn = document.getElementById("#card");

//add card when addbtn is clicked 
addbtn.addEventListener( "click",  function(){
   var card = document.createElement("div");
   var text  = document.createElement("input");
   card.style.cssText = " width: 300px;height: 250px;background-color: white;border: none;border-radius: 5px;display: flex;justify-content: center;align-items: center;color: black;background-color: #ddd;margin: 10px;"
   text.style.cssText = "width:300px ; height:250px; border:none; outline:none; background-color:white; font-size:1rem; text-align:center;";
   container.appendChild(card);
   card.appendChild(text);
   //  how keep data even after refreshing the page 
   window.localStorage.setItem("card",card)
} )
