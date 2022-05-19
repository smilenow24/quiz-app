console.clear();

const textElement1 = document.querySelector('[data-js="qcard__answer1"]');
const textElement2 = document.querySelector('[data-js="qcard__answer2"]');

const qcardButton1 = document.querySelector('[data-js="qcard-button1"]');
const qcardButton2 = document.querySelector('[data-js="qcard-button2"]');

function onButtonClick1() {
  textElement1.classList.toggle('qcard__answer--active');
}
function onButtonClick2() {
  textElement2.classList.toggle('qcard__answer--active');
}

qcardButton1.addEventListener('click', onButtonClick1);
qcardButton2.addEventListener('click', onButtonClick2);

const textElement1 = document.querySelector('[data-js="qcard__answer1"]');
const textElement2 = document.querySelector('[data-js="qcard__answer2"]');

const qcardButton1 = document.querySelector('[data-js="qcard-button1"]');
const qcardButton2 = document.querySelector('[data-js="qcard-button2"]');

function onButtonClick1() {
  textElement1.classList.toggle('qcard__answer--active');
}
function onButtonClick2() {
  textElement2.classList.toggle('qcard__answer--active');
}

qcardButton1.addEventListener('click', onButtonClick1);
qcardButton2.addEventListener('click', onButtonClick2);

/*
const buttonShowHide = document.querySelector('[data-js="qcard-button"]');
const answerField = document.querySelector('[data-js="qcard__answer"]');


function showAnswer(){
  answerField.classlist.style.display = "inline";
  buttonShowHide.textContent = "HIDE ANSWER";
}

buttonShowHide.addEventListener('onclick', showAnswer);




const bookmarkButton = document.querySelector('');

questionButton.addEventListener('onclick', showAnswer);

function bookmarkActive(){
  document.querySelector(".qcard__answer").style.display = 'inline';
}
*/
