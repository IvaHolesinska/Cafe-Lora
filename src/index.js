import './style.css';
// ----------   3 ---------
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

// -----------   4   -------------
const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
let ordered = false;

const order = () => {
  if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
};

orderBtnElm.addEventListener('click', order);
