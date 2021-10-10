const form = document.querySelector("#contactForm");
const button = document.querySelector("#button");

const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");


function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 1) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 1) === true) {
        lastName.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    
    console.log("Thank you for contacting us. We will be in touch with you very soon!");
}

function checkButtonDisabled() {
    if (checkLength(firstNameError.value, 1) && checkLength(lastNameError.value, 1) && checkLength(subject.value, 9) && validateEmail(email.value)) {
        button.disabled = false;
    } else {

        message.innerHTML = "";

        button.disabled = true;
    }
}

firstName.addEventListener("keyup", checkButtonDisabled);
lastName.addEventListener("keyup", checkButtonDisabled);
subject.addEventListener("keyup", checkButtonDisabled);
email.addEventListener("keyup", checkButtonDisabled);

function submitForm(submit) {
    submit.preventDefault();

    message.innerHTML = '<div id="message">Your message has been sent!</div>';

    form.reset();
}

form.addEventListener("submit", validateForm);


function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}