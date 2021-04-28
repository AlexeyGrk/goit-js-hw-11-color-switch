import './sass/main.scss';
// import Darkmode from 'darkmode-js';
import menu from './menu.json';
import createCardsTpm from './templates/cards.hbs';

// new Darkmode().showWidget();
// const options = {
//   bottom: '20px', // default: '32px'
//   right: '32px', // default: '32px'
//   left: 'unset', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff', // default: '#fff'
//   buttonColorDark: '#100f2c', // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: true, // default: true,
//   label: '🐥', // default: ''
//   autoMatchOsTheme: false, // default: true
// };

// const darkmode = new Darkmode(options);
// darkmode.showWidget();
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const controllerBtnThemeRef = document.querySelector('#theme-switch-toggle ');
// Get the theme toggle input

// Get the current theme from local storage
const currentTheme = localStorage.getItem('theme');

// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.body.classList.toggle(currentTheme);

  // If the current theme is dark, check the theme toggle
  if (currentTheme === Theme.DARK) {
    controllerBtnThemeRef.checked = true;
  }
}

// Function that will switch the theme based on the if the theme toggle is checked or not
function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// Add an event listener to the theme toggle, which will switch the theme
controllerBtnThemeRef.addEventListener('change', switchTheme, false);

const menuGalleryRef = document.querySelector('.js-menu');
const markup = createCardsTpm(menu);
menuGalleryRef.insertAdjacentHTML('beforeend', markup);

// controllerBtnThemeRef.checked = false;
// function clickHendler() {
//   if (this.checked) {
//     document.body.classList.remove('Theme.LIGHT');
//     document.body.classList.add('Theme.DARK');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     document.body.classList.add('Theme.LIGHT');
//     document.body.classList.remove('Theme.DARK');
//     localStorage.setItem('theme', 'light');
//   }
// }
// controllerBtnThemeRef.addEventListener('change', clickHendler);
// controllerBtnThemeRef.checked = false;
// controllerBtnThemeRef.addEventListener('change', e => {
//   bodyRef.classList.toggle(Theme.DARK);

//   if (controllerBtnThemeRef.checked === true) {
//     document.body.classList.remove(Theme.LIGHT);
//     document.body.classList.add(Theme.DARK);
//     localStorage.setItem('theme', 'Theme.DARK)');
//     const get = localStorage.getItem('theme');
//   } else {
//     document.body.classList.add(Theme.LIGHT);
//     document.body.classList.remove(Theme.DARK);
//     localStorage.setItem('theme', 'Theme.LIGHT');
//   }
// });
