import './style.css';

// add event listener to navBtn
const navElm = document.querySelector('nav');
const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

// add event listener to all a
const closeNavbar = () => {
  navElm.classList.add('nav-closed');
};

const navAllElm = navElm.querySelectorAll('a');

for (let i = 0; i < navAllElm.length; i++) {
  navAllElm[i].addEventListener('click', closeNavbar);
}
