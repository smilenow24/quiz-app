

const answerHide = document.querySelector('[data-js="qcard-button"]');
const answerButton = document.querySelector(".qcard__answer");

function showAnswer(){
  answerHide.classlist.style.display = "inline";
}

answerButton.addEventListener('onclick', showAnswer);




const bookmarkButton = document.querySelector('[data-js="qcard-button"]');

questionButton.addEventListener('onclick', showAnswer);

function showAnswer(){
  document.querySelector(".qcard__answer").style.display = 'inline';
}




