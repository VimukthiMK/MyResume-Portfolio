const submit = document.getElementsByClassName('form-contact')[0];
// Add event listener
submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobNumber = document.getElementById("mob-number").value;
    let message = document.getElementById("message").value;
    let body = 'Name :'+ name + '<br> Email :'+ email +'<br> Mobile :'+mobNumber+ '<br> Message :'+message;
    
    console.log('clicked');

    Email.send({
        SecureToken : "1452a02c-bfbc-48b8-91dc-2497add8ab3d",
        To : 'vimukthikulathilaka@gmail.com',
        From : "vimukthikulathilaka@gmail.com",
        Subject : "Contact Mail-Portfolio",
        Body : body
    }).then(
      message => alert("Your Response is Submitted")
    );
})

