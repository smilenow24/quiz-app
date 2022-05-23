//export function bookmark() {
/*
 const allBookmarkButtons = document.querySelectorAll('[data-js="bookmark"]');
  
    allBookmarkButtons.forEach(bookmarkButton => {
      bookmarkButton.addEventListener('click', {

        bookmarkButton.classList.toggle('qcard__bookmark--marked');

      });
    });
  }

export function bookmarkFct1() {
  const bookmarkButton = document.querySelector('[data-js="bookmark"]');
  bookmarkButton.classList.toggle('qcard__bookmark--active');
  bookmarkButton.addEventListener('click', bookmarkFct1);
} */

export function bookmarkFct1() {
  const allBookmarkButton = document.querySelectorAll('[data-js="bookmark"]');

  allBookmarkButton.forEach(bookmarkButton => {
    bookmarkButton.addEventListener('click', () => {
      bookmarkButton.classList.toggle('qcard__bookmark--active');
    });
  });
}
