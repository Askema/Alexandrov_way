
const nav = document.querySelector('.nav__list');
const button = document.querySelector('.nav__button');
const hamburger = document.querySelector('.nav__hamburger');

nav.classList.add('nav__list--closed');
hamburger.classList.remove('visually-hidden');
button.classList.remove('nav__button--close');
button.classList.add('nav__button--open');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  button.classList.toggle('nav__button--close');
  button.classList.toggle('nav__button--open');
  nav.classList.toggle('nav__list--closed');
  nav.classList.toggle('nav__list--open');
});
