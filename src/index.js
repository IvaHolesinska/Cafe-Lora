import './style.css';
import { Layer } from './Layer/index.js';
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
//Order - changing text content and toggle  drink__cup--selected class
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

//  ---------   5 ----------
//Komponents
const layerElm = document.querySelector('.drink__info');

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

for (let i = 0; i < layers.length; i++) {
  layerElm.innerHTML += Layer(layers[i]);
}
