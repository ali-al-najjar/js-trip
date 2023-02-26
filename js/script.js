window.onload=function(){
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let date_of_birth = document.getElementById("date_of_birth");
let submit = document.getElementById("submit");
let form_title = document.getElementById("form_title");
let profile = [];
submit.addEventListener("click", function(){
    let profile_data = {
        "first_name":first_name.value,
        "last_name":last_name.value,
        "email":email.value,
        "password":password.value,
        "date_of_birth":date_of_birth.value
    }
    profile.push(profile_data.first_name,profile_data.last_name,profile_data.email,profile_data.password,profile_data.date_of_birth);
    console.log(profile);
    form_title.innerText=`Welcome ${profile[0]}`;
})


// ValidateEmail(email);
// function ValidateEmail(input) {

//   let email_validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   if (input.value.match(email_validation)) {

//     alert("Valid email address!");

//     email.focus();

//     return true;

//   } else {

//     alert("Invalid email address!");

//     email.focus();

//     return false;

//   }

// }
}


