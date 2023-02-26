window.onload=function(){
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profession = document.getElementById("profession");
let submit = document.getElementById("submit");
let form_title = document.getElementById("form_title");
let profile = [];

submit.addEventListener("click", function(){
    let profile_data = {
        "first_name":first_name.value,
        "last_name":last_name.value,
        "email":email.value,
        "password":password.value,
        "profession":profession.value
    }
    console.log(profile_data);
})

function validateForm() {
  let name = document.forms["form"]["first_name"].value;
  if( name == ""){
     alert( "Please provide your First Name!" );
     name.focus();
     return false;
  }
return true;
}

submit.addEventListener("click",validateForm);
}


