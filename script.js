"use strict";

// Element :
const submit_btn = document.querySelector('.submit-btn');
const In_email = document.querySelector('#email');
const error_messg = document.querySelector('.error-message');
const dismiss_btn = document.querySelector('.dismiss_btn');
const display_mail = document.querySelector('.mail');

const sign_page = document.querySelector('.main');
const submittion = document.querySelector('.hidden');

// fucntion :
submit_btn.addEventListener('click',submit_Email);
dismiss_btn.addEventListener('click',toggleCard);

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function toggleCard() {
  sign_page.classList.toggle("hide");
  submittion.classList.toggle("hide");
}

function submit_Email(e) {
  e.preventDefault();
  if(validateEmail(In_email.value)) {
    display_mail.textContent = In_email.value;
    console.log(display_mail.textContent);
    toggleCard();
    In_email.value = " ";
    error_messg.classList.add("hide");
  }
  else {
    error_messg.classList.remove("hide");
    In_email.style.border = "1px solid red";
  }
}