window.onload=function(){
let form = document.getElementsByName("form");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profession = document.getElementById("profession");
let submit = document.getElementById("submit");
let form_title = document.getElementById("form_title");

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
  let fname = document.forms["form"]["first_name"].value;
  let lname = document.forms["form"]["last_name"].value;
  let email = document.forms["form"]["email"].value;
  let password = document.forms["form"]["password"].value;
  let profession = document.forms["form"]["profession"].value;

  if(fname == ""){
     alert("First name is required!");
     return false;
  }else if(lname == ""){
    alert("Last name is required!");
    return false;
 }else if(email == ""){
  alert("Email is required!");
  
  return false;
}else if(password == ""){
  alert("Password is required!");
  return false;
}else if(profession == ""){
  alert("Profession is required!");
  return false;
}else
  return true;
}

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


