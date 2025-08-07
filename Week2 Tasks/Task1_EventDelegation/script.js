const btn_container = document.getElementById("ButtonContainer");
const add_btn= document.getElementById("add_btn");

let count =0
//event delegation : listener with parent
btn_container.addEventListener("click", function(e){
   if(e.target&&e.target.tagName==="BUTTON"){  //tagName gives the name of element in uppercase
    alert(e.target.textContent + " clicked");
   }
})

add_btn.addEventListener("click", function(){
    
    const newBtn = document.createElement("button");
    newBtn.textContent= "Button" + ++count;
    newBtn.classList.add("Btn");
    btn_container.appendChild(newBtn);
})

