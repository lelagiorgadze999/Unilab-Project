"use strict";
/////////////////////////
//menu
const menuIcon = document.querySelector(".man-icon");
const menuBox = document.querySelector(".menu-box");

menuIcon.addEventListener("click", function (e) {
  // Toggle the visibility of the menu box
  console.log("button");
  menuBox.classList.toggle("active");
});
