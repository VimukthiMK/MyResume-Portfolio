//Toggle  
function toggle(){
    let x =document.getElementById("form-toggle");
    if(x.style.display === "none"){
        x.style.display ="block";
    }else 
    {
        x.style.display ="none";
    }
}


//Navigation 
 const menuIcon = document.getElementById('menu-icon');
const navigateList = document.querySelector('.navigateList');
        
menuIcon.addEventListener('click', () => {
navigateList.classList.toggle('open');
        });