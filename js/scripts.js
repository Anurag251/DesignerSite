const dropDown = document.querySelector(".drop-down");
const drop = document.querySelector(".options");
const scrollToTop = document.querySelector(".scroll-to-top");

const sticky = document.querySelector("header");

const sideNavBg = document.querySelector(".side-nav-bg");
const sideNavButn = document.querySelector(".side-nav-btn");
const nav = document.querySelector(".nav");
const buttonGroups = document.querySelector(".sign-in-buttons");

dropDown.addEventListener("click", () => {
  drop.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});
scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

sideNavButn.addEventListener("click", () => {
  sideNavBg.classList.toggle("show");

  nav.classList.toggle("side-nav");
  buttonGroups.classList.toggle("show-buton");
});

window.onscroll = () => {
  this.scrollY > 180
    ? sticky.classList.add("sticky")
    : sticky.classList.remove("sticky");
};

const popupAreas = document.querySelectorAll(".popup-area");

if (popupAreas[0]) {
  popupAreas.forEach((popupArea, idx) => {
    const screenShotPopup = popupArea.querySelector(".screen-shot-popup");
    const screenShotPopupbg = popupArea.querySelector(".screen-shot-popup-bg");
    const popupCloseBtn = popupArea.querySelector(".popup-close-btn");
    const screenShotBtn = document.querySelectorAll(".screenShotBtn");

    screenShotBtn[idx].addEventListener("click", () => {
      screenShotPopup.classList.add("active");
      screenShotPopupbg.classList.add("active");
    });

    const closing = () => {
      screenShotPopup.classList.remove("active");
      screenShotPopupbg.classList.remove("active");
    };

    screenShotPopupbg.addEventListener("click", () => closing());

    popupCloseBtn.addEventListener("click", () => closing());
  });
}
