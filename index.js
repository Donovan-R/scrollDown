const date = document.querySelector("#date");
date.textContent = new Date().getFullYear();
const toggle = document.querySelector(".toggle-btn");
const navSmall = document.querySelector(".nav-entire");
const navHeight = navSmall.getBoundingClientRect().height;
const main = document.querySelector("main");
const linksContainer = document.querySelector(".listCont");
const links = document.querySelector(".links");
console.log(navHeight);

toggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > navHeight) {
    navSmall.classList.add("nav-down");
  } else {
    navSmall.classList.remove("nav-down");
  }
});

const up = document.querySelector("#up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 700) {
    up.classList.add("visible");
  } else {
    up.classList.remove("visible");
  }
});

const anchor = document.querySelectorAll(".scrollLinks");
// const pages = document.querySelectorAll(".page");
// const hrefAnc = anchor.forEach(function (anc) {
//   anc.getAttribute("href");
// });

anchor.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const getId = btn.getAttribute("href").slice(1);
    const pageTo = document.getElementById(getId);
    const here = pageTo.offsetTop - navHeight;
    window.scrollTo({ top: here });
    linksContainer.style.height = 0;
  });
});
