//export function bookmark() {

/* const allBookmarkButtons = document.querySelectorAll('[data-js="bookmark"]');
  
    allBookmarkButtons.forEach(bookmarkButton => {
      bookmarkButton.addEventListener('click',  {

        bookmarkButton.classList.toggle('qcard__bookmark--marked');

      });
    });
  } */

export function bookmarkFct1() {
  const b11 = document.querySelector('[data-js="bookmark"]');
  b11.classList.toggle('qcard__bookmark--active');
  b11.addEventListener('click', bookmarkFct1);
}
