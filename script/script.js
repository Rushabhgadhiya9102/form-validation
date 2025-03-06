// -------------- V A R I A B L E - D E C L A R A T I O N ----------------

const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const gender = document.querySelectorAll("input[name='gender']");
const hobbies = document.querySelectorAll("input[name='hobbies']");
const date = document.getElementById("date");
const form = document.getElementById("form");
const emailError = document.querySelector(".emailError");
const usernameError = document.querySelector(".usernameError");
const passwordError = document.querySelector(".passwordError");
const genderError = document.querySelector(".genderError");
const hobbieError = document.querySelector(".hobbieError");
const dateError = document.querySelector(".dateError");
const submitBtn = document.querySelector(".btn");

// -------------- V A R I A B L E - D E C L A R A T I O N ----------------

// -------------- V A L I D A T I O N - F U N C T I O N ----------------

function validation() {

  // --- USERNAME - ERROR ---

  if (userName.value.trim() === "") {
    usernameError.classList.remove("d-none");

  } else {
    usernameError.classList.add("d-none");

  }

  // --- EMAIL - ERROR ---

  if (email.value.trim() === "") {
    emailError.classList.remove("d-none");

  } else {
    emailError.classList.add("d-none");

  }

  // --- PASSWORD - ERROR ---

  if (password.value.trim() === "") {
    passwordError.classList.remove("d-none");

  } else {
    passwordError.classList.add("d-none");

  }

  // --- GENDER - ERROR ---

  if (!gender[0].checked && !gender[1].checked) {
    genderError.classList.remove("d-none");

  } else {
    genderError.classList.add("d-none");

  }

 // --- HOBBIES - ERROR --- 

  if (!hobbies[0].checked || !hobbies[1].checked || !hobbies[2].checked) {
    hobbieError.classList.remove("d-none");

  } else {
    hobbieError.classList.add("d-none");

  }

  // --- DATE - ERROR ---

  if (date.value === "") {
    dateError.classList.remove("d-none");
    
  } else {
    dateError.classList.add("d-none");

  }
}

// -------------- V A L I D A T I O N - F U N C T I O N ----------------

// -------------- S U B M I T - B U T T O N  -------------------

form.addEventListener("submit" ,(event) => {

    event.preventDefault();
    validation()

})

// -------------- S U B M I T - B U T T O N  -------------------