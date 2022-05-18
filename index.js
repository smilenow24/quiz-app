
echo = "test";

console.clear();

const textElement = document.querySelector('[data-js="qcard__answer"]');
const button = document.querySelector('[data-js="qcard-button"]');

function onButtonClick(){
  textElement.classList.toggle('qcard__answer--active');
} 

button.addEventListener("click", onButtonClick);




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




