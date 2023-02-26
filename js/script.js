window.onload=function(){
let form = document.getElementById("registration_form");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profession = document.getElementById("profession");
let submit = document.getElementById("submit");
let form_title = document.getElementById("form_title");

function requireFields(e){
  e.preventDefault();
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
 }

function addJSON(){
  let profile_data = {
    "first_name":first_name.value,
    "last_name":last_name.value,
    "email":email.value,
    "password":password.value,
    "profession":profession.value
}
}

function validateEmail() {
  let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validEmail)) {
    email.style.borderColor="green";
    return true;
  } else {
    email.style.borderColor="red";
    email.style.animation= "nudge .4s";
    return false;
  }
}
function validatePassword()
{
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!regex.test(password.value)){
      password.style.borderColor="red";
      password.style.animation= "nudge .4s";
    }else{
    password.style.borderColor="green";}
}

function checkPalindrome(palindrome){
  if(palindrome.length === 1) return true;
  if(plaindrome.length === 2) return str[0] === str[1];
  if(palindrome[0] === palindrome.slice(-1)) return checkPalindrome(palindrome.slice(1,-1))
  return false;
}

function mergeSort(numbers){

}
form.addEventListener("submit", requireFields);
form.addEventListener("submit", addJSON);
email.addEventListener("change", validateEmail);
password.addEventListener("change",validatePassword);


}


