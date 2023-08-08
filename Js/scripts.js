function toggle(){
    let x =document.getElementById("form-toggle");
    if(x.style.display === "none"){
        x.style.display ="block";
    }else 
    {
        x.style.display ="none";
    }
}

let pop =document.getElementById("pop-up");

function openPopup(){
    pop.classList.add("open-popup");
     
}

function closePopup(){
    pop.classList.remove("open-popup");
}

