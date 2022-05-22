export function qCardButtonFct1() {
  const qCardButton1 = document.querySelector('[data-js="qCard-button1"]');
  const element1 = document.querySelector('[data-js="qcard__answer1"]');

  function qCardButtonFct1() {
    element1.classList.toggle('qcard__answer--active');

    if (qCardButton1.innerText === 'SHOW ANSWER') {
      qCardButton1.innerText = 'HIDE Answer';
    } else {
      qCardButton1.innerText = 'SHOW ANSWER';
    }
  }

  qCardButton1.addEventListener('click', qCardButtonFct1);
}
