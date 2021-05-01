import './style.css';

const navElm = document.querySelector('nav');
const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});
