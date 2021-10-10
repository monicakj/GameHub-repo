const form = document.querySelector(".payment-container");
const checkOutButton = document.querySelector("checkout-button");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address")
const addressError = document.querySelector("#addressError")

const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

const state = document.querySelector("#state");
const stateError = document.querySelector("#stateError");

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");

const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#cardnameError");

const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardnumberError");

const expMonth = document.querySelector("#expMonth");
const expMonthError = document.querySelector("#expmonthError");

const expYear = document.querySelector("#expYear");
const expYearError = document.querySelector("#expYearError");

const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");



function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 1) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 1) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checkLength(city.value, 1) === true) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }

    if (checkLength(state.value, 1) === true) {
        stateError.style.display = "none";
    } else {
        stateError.style.display = "block";
    }

    if (checkLength(zip.value, 1) === true) {
        zipError.style.display = "none";
    } else {
        zipError.style.display = "block";
    }

    if (checkLength(cardName.value, 1) === true) {
        cardNameError.style.display = "none";
    } else {
        cardNameError.style.display = "block";
    }

    if (checkLength(cardNumber.value, 15) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display = "block";
    }

    if (checkLength(expMonth.value, 1) === true) {
        expMonthError.style.display = "none";
    } else {
        expMonthError.style.display = "block";
    }

    if (checkLength(expYear.value, 3) === true) {
        expYearError.style.display = "none";
    } else {
        expYearError.style.display = "block";
    }

    if (checkLength(cvv.value, 2) === true) {
        cvvError.style.display = "none";
    } else {
        cvvError.style.display = "block";
    }    
}

function checkButtonDisabled() {
    if (checkLength(fullNameError.value, 1) && validateEmail(email.value) && checkLength(addressError.value, 1) && checkLength(cityError.value, 1) && checkLength(stateError.value, 1) && checkLength(zipError.value, 1) && checkLength(cardNameError.value, 1) && checkLength(cardNumberError.value, 15) && checkLength(expMonthError.value, 1) && checkLength(expYearError.value, 3) && checkLength(cvvError.value, 2)) {
        checkOutButton.disabled = false;
    } else {

        message.innerHTML = "";

        checkOutButton.disabled = true;
    }
}

fullName.addEventListener("keyup", checkButtonDisabled);
email.addEventListener("keyup", checkButtonDisabled);
address.addEventListener("keyup", checkButtonDisabled);
city.addEventListener("keyup", checkButtonDisabled);
state.addEventListener("keyup", checkButtonDisabled);
zip.addEventListener("keyup", checkButtonDisabled);
cardName.addEventListener("keyup", checkButtonDisabled);
cardNumber.addEventListener("keyup", checkButtonDisabled);
expMonth.addEventListener("keyup", checkButtonDisabled);
expYear.addEventListener("keyup", checkButtonDisabled);
cvv.addEventListener("keyup", checkButtonDisabled);


function submitForm(submit) {
    submit.preventDefault();

    message.innerHTML = '<div id="message">Your payment has been successfully processed!</div>';

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