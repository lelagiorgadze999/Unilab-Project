"use strict";

import { data, blogs } from "./data.js";
console.log(data);

const cardContainer = document.getElementById("cards-box");
const blogsContainer = document.getElementById("blogs");
console.log(blogsContainer);

// discover section cards
data.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = cardData.imageUrl;
  image.alt = cardData.description;

  const description = document.createElement("h3");
  description.textContent = cardData.description;

  const paragraph = document.createElement("p");
  paragraph.textContent = cardData.paragraph;

  card.appendChild(image);
  card.appendChild(description);
  card.appendChild(paragraph);

  cardContainer.appendChild(card);
});

///blogs section cards
console.log(blogs);
blogs.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("blog-card");
  const image = document.createElement("img");
  image.src = cardData.imageUrl;
  image.alt = cardData.title;
  const title = document.createElement("h3");
  title.textContent = cardData.title;
  card.appendChild(image);
  card.appendChild(title);
  blogsContainer.appendChild(card);
});

//////////////////////////////////
//scroll

const header = document.getElementById("myHeader");
const links = document.querySelectorAll(".link");
const menuIcons = document.querySelectorAll(".menu");
console.log(menuIcons);
console.log(links);
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("scroll");
    links.forEach((link) => (link.style.color = "#424244"));
    menuIcons.forEach((icon) => (icon.style.stroke = "#424244"));
  } else {
    header.classList.remove("scroll");
    links.forEach((link) => (link.style.color = "#ffffff"));
    menuIcons.forEach((icon) => (icon.style.stroke = "#ffffff"));
  }
}
window.onscroll = function () {
  scrollFunction();
};

///////////////////////////////////
///slider
// JavaScript
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--left");
const btnLeft = document.querySelector(".slider__btn--right");
let maxSlide = slides.length;
let curSlide = 0;
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
    goToSlide(curSlide);
    console.log("nextslide");
  }
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  console.log("prevslide");
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
