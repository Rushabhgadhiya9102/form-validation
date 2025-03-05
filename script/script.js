const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const gender = document.querySelectorAll("input[name='gender']");
const date = document.getElementById("date");
const form = document.getElementById("form");
const emailError = document.querySelector(".emailError");
const usernameError = document.querySelector(".usernameError");
const passwordError = document.querySelector(".passwordError");
const genderError = document.querySelector(".genderError");
const dateError = document.querySelector(".dateError");
const submitBtn = document.querySelector(".btn");

function validation() {

    if(userName.value.trim() === ""){
        usernameError.classList.remove("d-none");

    } else {
        usernameError.classList.add("d-none");

    }

    if (email.value.trim() === "") {
      emailError.classList.remove("d-none");

    } else {
      emailError.classList.add("d-none");

    }

    if (password.value.trim() === "") {
      passwordError.classList.remove("d-none");

    } else {
      passwordError.classList.add("d-none");
      
    }

    if(!gender[0].checked && !gender[1].checked){
        genderError.classList.remove("d-none");

    } else {
        genderError.classList.add("d-none");

    }

    if(date.value === ""){
        dateError.classList.remove("d-none");

    } else {
        dateError.classList.add("d-none");

    }

}


form.addEventListener("submit" ,(event) => {

    event.preventDefault();
    validation()

})