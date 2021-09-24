"use strict";

const burgerEl = document.querySelector(".js-nav");
const sectionBtnEls = document.querySelectorAll(".js-sectionBtn");

function handleButton(event) {
  for (const sectionBtnEl of sectionBtnEls) {
    sectionBtnEl.classList.toggle("hidden");
  }
}

burgerEl.addEventListener("click", handleButton);
