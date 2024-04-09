"use strict";
const btns = document.querySelectorAll(".filter");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((btn) => {
      btn.classList.remove("btnactive");
    });

    this.classList.add("btnactive");
  });
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
