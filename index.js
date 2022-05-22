import { bookmarkFct1 } from './js/bookmark.js';
import { qCardButtonFct1 } from './js/answer.js';
import { naviChange } from './js/navigation.js';

naviChange();
qCardButtonFct1();
bookmarkFct1();

//qCardButtonFct2()

//Bookmark//
/*const b11 = document.querySelector('[data-js="bookmark"]');

function bookmarkFct1() {
  
  b11.classList.toggle('qcard__bookmark--active');
  b11.addEventListener('click', bookmarkFct1)
}
b11.addEventListener('click', bookmarkFct1)*/

//Navigation//
/*
const naviButtonHome = document.querySelector('[data-js="navi__itemHome"]');
const naviButtonBookmark = document.querySelector('[data-js="navi__itemBookmark"]');
const naviButtonCreate = document.querySelector('[data-js="navi__itemCreate"]');
const naviButtonProfil = document.querySelector('[data-js="navi__itemProfil"]');

const naviButtonHomeActive = document.querySelector('hideMeNow1');
const naviButtonBookmarkActive = document.querySelector('hideMeNow2');
const naviButtonCreateActive = document.querySelector('hideMeNow3');
const naviButtonProfilActive = document.querySelector('hideMeNow4');


naviButtonHome.addEventListener('click', () => {
  
  naviButtonHome.classList.add('navi__item--marked');
  naviButtonBookmark.classList.remove('navi__item--marked');
  naviButtonCreate.classList.remove('navi__item--marked');
  naviButtonProfil.classList.remove('navi__item--marked');

  naviButtonHomeActive.classList.add('hideMeNow--marked');
  naviButtonBookmarkActive.classList.remove('hideMeNow--marked');
  naviButtonCreateActive.classList.remove('hideMeNow--marked');
  naviButtonProfilActive.classList.remove('hideMeNow--marked');
});

naviButtonBookmark.addEventListener('click', () => {

  naviButtonHome.classList.remove('navi__item--marked');
  naviButtonBookmark.classList.add('navi__item--marked');
  naviButtonCreate.classList.remove('navi__item--marked');
  naviButtonProfil.classList.remove('navi__item--marked');

  naviButtonHomeActive.classList.remove('hideMeNow--marked');
  naviButtonBookmarkActive.classList.add('hideMeNow--marked');
  naviButtonCreateActive.classList.remove('hideMeNow--marked');
  naviButtonProfilActive.classList.remove('hideMeNow--marked');
});

naviButtonCreate.addEventListener('click', () => {
  naviButtonHome.classList.remove('navi__item--marked');
  naviButtonBookmark.classList.remove('navi__item--marked');
  naviButtonCreate.classList.add('navi__item--marked');
  naviButtonProfil.classList.remove('navi__item--marked');

  naviButtonHomeActive.classList.remove('hideMeNow--marked');
  naviButtonBookmarkActive.classList.remove('hideMeNow--marked');
  naviButtonCreateActive.classList.add('hideMeNow--marked');
  naviButtonProfilActive.classList.remove('hideMeNow--marked');
});

naviButtonProfil.addEventListener('click', () => {
  naviButtonHome.classList.remove('navi__item--marked');
  naviButtonBookmark.classList.remove('navi__item--marked');
  naviButtonCreate.classList.remove('navi__item--marked');
  naviButtonProfil.classList.add('navi__item--marked');

  naviButtonHomeActive.classList.remove('hideMeNow--marked');
  naviButtonBookmarkActive.classList.remove('hideMeNow--marked');
  naviButtonCreateActive.classList.remove('hideMeNow--marked');
  naviButtonProfilActive.classList.add('hideMeNow--marked');
}); */
