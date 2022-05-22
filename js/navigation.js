export function naviChange() {
  const naviButtonHome = document.querySelector('[data-js="navi__itemHome"]');
  const naviButtonBookmark = document.querySelector(
    '[data-js="navi__itemBookmark"]'
  );
  const naviButtonCreate = document.querySelector(
    '[data-js="navi__itemCreate"]'
  );
  const naviButtonProfil = document.querySelector(
    '[data-js="navi__itemProfil"]'
  );

  const naviButtonHomeActive = document.querySelector('hideMeNow1');
  const naviButtonBookmarkActive = document.querySelector('hideMeNow2');
  const naviButtonCreateActive = document.querySelector('hideMeNow3');
  const naviButtonProfilActive = document.querySelector('hideMeNow4');

  naviButtonHome.addEventListener('click', () => {
    naviButtonHome.classList.add('navi__item--marked');
    naviButtonBookmark.classList.remove('navi__item--marked');
    naviButtonCreate.classList.remove('navi__item--marked');
    naviButtonProfil.classList.remove('navi__item--marked');

    naviButtonHomeActive.classList.toggle('hideMeNow--marked');
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
  });
}

//const allNaviButton = document.querySelectorAll('navi__item')

//allNaviButton.forEach(naviButton){
//naviButton.addEventListener('click')
//naviButton.classList.toggle('navi__item--marked')

//}
