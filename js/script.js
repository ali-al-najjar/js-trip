window.onload=function(){
const form = document.getElementById("registration_form");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const profession = document.getElementById("profession");
const form_title = document.getElementById("form_title");
let profile={};
const count = 10;
const merge_sort=document.getElementById("merge_sort");
let flag = false;


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

function reverseText(text) {
  let reversed="";
  for (let i = text.length-1; i >= 0; i--) {
    reversed += text[i];
    
  }
  return reversed;
}
function consonantText(text) {
  let consonant_text="";
  let vowels_text="";
  for (let i = 0; i <= text.length-1; i++) {
    if (text[i] =="a" ||  text[i] =="e" || text[i] =="i" || text[i] =="o" || text[i] =="u"){
      vowels_text += text[i]
    }else{
      consonant_text += text[i];
    }
    
  }
  return vowels_text + consonant_text + 'ay';
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
    reverse_box.style.display="flex";
    reverse.style.display="initial";
    reverse.style.padding="5px";
    reverse_btn.style.display="initial"; 
    consonant_box.style.display="flex";
    consonant.style.display="initial";
    consonant.style.padding="5px";
    consonant_btn.style.display="initial"; 
  })


email.addEventListener("change", validateEmail);
password.addEventListener("change",validatePassword);

// for(let i = 0; i<count;i++){
//   prompt(`Enter ${i+1} number to sort them`);
// }

const palindrome_box = document.getElementById("palindrome_box");
const palindrome = document.getElementById("palindrome");
const palindrome_btn = document.getElementById("check_palindrome");
palindrome_btn.addEventListener("click",function(){
  if(checkPalindrome(palindrome.value)){
    palindrome_box.innerText="It is a Palindrome";
  }else{
    palindrome_box.innerText="It is not a Palindrome";
  };})

const year_box = document.getElementById("year_box");
const year = document.getElementById("year");
const year_btn = document.getElementById("check_year");
year_btn.addEventListener("click",function(){
  if(agePrimeCheck(year.value)){
    year_box.innerText="It is Prime!";
  }else{
    year_box.innerText="It is not Prime!";
  };})

const reverse_box = document.getElementById("reverse_box");
const reverse = document.getElementById("reverse");
const reverse_btn = document.getElementById("reverse_btn");

reverse_btn.addEventListener("click",function(){
  reverse_box.innerText= (reverseText(reverse.value));
})


const consonant_box = document.getElementById("consonant_box");
const consonant = document.getElementById("consonant");
const consonant_btn = document.getElementById("consonant_btn");
consonant_btn.addEventListener("click",function(){
  consonant_box.innerText= (consonantText(consonant.value));
})

let course_name = document.getElementById("course_name");
let course_credits = document.getElementById("course_credits");
let course_duration = document.getElementById("course_duration");
let course_students = document.getElementById("course_students");
const create_class = document.getElementById("create_class");

class Course {
  constructor(name, credits,duration,numbers_of_students) {
    this.name = name;
    this.credits = credits;
    this.duration = duration;
    this.number_of_students= numbers_of_students;
  }
}
create_class.addEventListener("click", function(){
  let course = new Course(course_name.value,course_credits.value,course_duration.value,course_students.value);
  console.log(course.course_name);
})


}

