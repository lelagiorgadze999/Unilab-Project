"use strict";

//////////////////////////////////
//popup
const modal = document.querySelector(".s-popup");
const overlay = document.querySelector(".overlay");
const btnClosedModal = document.querySelector(".close");
const btnsOpenModal = document.querySelectorAll(".btnterm");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnClosedModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//Esc key
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////
//menu
const menuIcon = document.querySelector(".man-icon");
const menuBox = document.querySelector(".menu-box");

menuIcon.addEventListener("click", function (e) {
  // Toggle the visibility of the menu box
  console.log("button");
  menuBox.classList.toggle("active");
});

////////////////////
//link flight page
const btnContinue = document.getElementById("btnContinue");
console.log(btnContinue);
btnContinue.addEventListener("click", function () {
  window.location.href = "./services.html";
  console.log("link");
});
