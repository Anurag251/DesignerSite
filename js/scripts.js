const dropDown = document.querySelector('.drop-down');
const drop = document.querySelector('.options');
const scrollToTop = document.querySelector('.scroll-to-top');

const sticky = document.querySelector('header');

const sideNavBg = document.querySelector('.side-nav-bg');
const sideNavButn = document.querySelector('.side-nav-btn');
const nav = document.querySelector('.nav');
const buttonGroups = document.querySelector('.sign-in-buttons');

dropDown.addEventListener('click', () => {
  drop.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollToTop.classList.add('show');
  } else {
    scrollToTop.classList.remove('show');
  }
});
scrollToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

sideNavButn.addEventListener('click', () => {
  sideNavBg.classList.toggle('show');

  nav.classList.toggle('side-nav');
  buttonGroups.classList.toggle('show-buton');
});

window.onscroll = () => {
  this.scrollY > 180
    ? sticky.classList.add('sticky')
    : sticky.classList.remove('sticky');
};
