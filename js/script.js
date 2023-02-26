window.onload=function(){
let form = document.getElementById("registration_form");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profession = document.getElementById("profession");
let form_title = document.getElementById("form_title");
let profile={};
let count = 10;
let merge_sort=document.getElementById("merge_sort");

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
     return true,form.style.display="none";
 }

function addJSON(){
  let profile_data = {
    "first_name":first_name.value,
    "last_name":last_name.value,
    "email":email.value,
    "password":password.value,
    "profession":profession.value
}
return profile_data;
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

function checkPalindrome(value){
  if(value.length === 1) return true;
  if(value.length === 2) return value[0] === value[1];
  if(value[0] === value.slice(-1)) return checkPalindrome(value.slice(1,-1))
  return false;
}

function mergeSort(numbers){

}

function agePrimeCheck(year_of_birth) {
  let current =  new Date().getFullYear();
  let age = current - year_of_birth
  if (age <= 1) return false;
  if (age == 2) return true;
  for (let i = 2; i <= age / 2; i++) {
    if (age % i == 0) {
      return false;
    }
  }
  return true;
}


form.addEventListener("submit", requireFields);
form.addEventListener("submit", function(){
  addJSON();
  profile = addJSON();
  form_title.innerText=`Welcome ${profile.first_name}`;
  palindrome_box.style.display="flex";
  palindrome.style.display="initial";
  palindrome.style.padding="5px";
  palindrome_btn.style.display="initial";
  year_box.style.display="flex";
  year.style.display="initial";
  year.style.padding="5px";
  year_btn.style.display="initial";
})
email.addEventListener("change", validateEmail);
password.addEventListener("change",validatePassword);

// for(let i = 0; i<count;i++){
//   prompt(`Enter ${i+1} number to sort them`);
// }

let palindrome_box = document.getElementById("palindrome_box");
let palindrome = document.getElementById("palindrome");
let palindrome_btn = document.getElementById("check_palindrome");
palindrome_btn.addEventListener("click",function(){
  if(checkPalindrome(palindrome.value)){
    palindrome_box.innerText="It is a Palindrome";
  }else{
    palindrome_box.innerText="It is not a Palindrome";
  };})

let year_box = document.getElementById("year_box");
let year = document.getElementById("year");
let year_btn = document.getElementById("check_year");
year_btn.addEventListener("click",function(){
  if(agePrimeCheck(year.value)){
    year_box.innerText="It is Prime!";
  }else{
    year_box.innerText="It is not Prime!";
  };})
}




