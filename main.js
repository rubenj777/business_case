"use strict";

let outsideForm;

function hideLogin(event) {
  console.log(event);
  if (outsideForm == event.target) {
    outsideForm.classList.add("hide");
  }
}

function login() {
  outsideForm.classList.remove("hide");
}

document.addEventListener("DOMContentLoaded", function () {
  let loginForm = document.querySelector("#login-form");
  document.querySelector("#user").addEventListener("click", login);
  outsideForm = document.querySelector("#outside-form");
  outsideForm.addEventListener("click", hideLogin);
});
