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
