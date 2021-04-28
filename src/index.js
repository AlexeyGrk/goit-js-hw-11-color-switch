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

const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);

if (currentTheme) {
  document.body.classList.toggle(currentTheme);

  if (currentTheme === Theme.DARK) {
    controllerBtnThemeRef.checked = true;
  }
}

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

controllerBtnThemeRef.addEventListener('change', switchTheme, false);

const menuGalleryRef = document.querySelector('.js-menu');
const markup = createCardsTpm(menu);
menuGalleryRef.insertAdjacentHTML('beforeend', markup);
