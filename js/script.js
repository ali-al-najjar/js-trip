window.onload=function(){
let form = document.getElementById("registration_form");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profession = document.getElementById("profession");
let submit = document.getElementById("submit");
let form_title = document.getElementById("form_title");

form.addEventListener("submit", function(e){
  e.preventDefault();
    let profile_data = {
        "first_name":first_name.value,
        "last_name":last_name.value,
        "email":email.value,
        "password":password.value,
        "profession":profession.value
    }
    console.log(profile_data);
    if(first_name.value == ""){
      alert("First name is required!");
      return false;
   }else if(last_name.value == ""){
     alert("Last name is required!");
     return false;
  }else if(email.value == ""){
   alert("Email is required!");
   return false;
 }else if(password.value == ""){
   alert("Password is required!");
   return false;
 }else if(profession.value == ""){
   alert("Profession is required!");
   return false;
 }else
   return true;
 })

function validateEmail(input) {
  var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validEmail)) {
    alert("Valid email address!");
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
}

function checkPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1))
  return false;
}


}


