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

  const naviButtonHomeActive = document.querySelector('[data-js="hideMeNow1"]');
  const naviButtonBookmarkActive = document.querySelector(
    '[data-js="hideMeNow2"]'
  );
  const naviButtonCreateActive = document.querySelector(
    '[data-js="hideMeNow3"]'
  );
  const naviButtonProfilActive = document.querySelector(
    '[data-js="hideMeNow4"]'
  );

  console.log(
    naviButtonHomeActive,
    naviButtonBookmarkActive,
    naviButtonCreateActive,
    naviButtonProfilActive
  );

  naviButtonHome.addEventListener('click', () => {
    naviButtonHome.classList.add('navi__item--marked');
    naviButtonBookmark.classList.remove('navi__item--marked');
    naviButtonCreate.classList.remove('navi__item--marked');
    naviButtonProfil.classList.remove('navi__item--marked');

    naviButtonHomeActive.classList.remove('hideMeNow');
    naviButtonBookmarkActive.classList.add('hideMeNow');
    naviButtonCreateActive.classList.add('hideMeNow');
    naviButtonProfilActive.classList.add('hideMeNow');
    console.log(naviButtonHomeActive);
  });

  naviButtonBookmark.addEventListener('click', () => {
    naviButtonHome.classList.remove('navi__item--marked');
    naviButtonBookmark.classList.add('navi__item--marked');
    naviButtonCreate.classList.remove('navi__item--marked');
    naviButtonProfil.classList.remove('navi__item--marked');

    naviButtonHomeActive.classList.add('hideMeNow');
    naviButtonBookmarkActive.classList.remove('hideMeNow');
    naviButtonCreateActive.classList.add('hideMeNow');
    naviButtonProfilActive.classList.add('hideMeNow');
  });

  naviButtonCreate.addEventListener('click', () => {
    naviButtonHome.classList.remove('navi__item--marked');
    naviButtonBookmark.classList.remove('navi__item--marked');
    naviButtonCreate.classList.add('navi__item--marked');
    naviButtonProfil.classList.remove('navi__item--marked');

    naviButtonHomeActive.classList.add('hideMeNow');
    naviButtonBookmarkActive.classList.add('hideMeNow');
    naviButtonCreateActive.classList.remove('hideMeNow');
    naviButtonProfilActive.classList.add('hideMeNow');
  });

  naviButtonProfil.addEventListener('click', () => {
    naviButtonHome.classList.remove('navi__item--marked');
    naviButtonBookmark.classList.remove('navi__item--marked');
    naviButtonCreate.classList.remove('navi__item--marked');
    naviButtonProfil.classList.add('navi__item--marked');

    naviButtonHomeActive.classList.add('hideMeNow');
    naviButtonBookmarkActive.classList.add('hideMeNow');
    naviButtonCreateActive.classList.add('hideMeNow');
    naviButtonProfilActive.classList.remove('hideMeNow');
  });
}

//const allNaviButton = document.querySelectorAll('navi__item')

//allNaviButton.forEach(naviButton){
//naviButton.addEventListener('click')
//naviButton.classList.toggle('navi__item--marked')

//}
