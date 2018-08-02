const quesBtn = document.querySelectorAll('.question__btn');
const hiddenQuest = document.querySelectorAll('.question-block');

const activeBtn = (evt) => {
  if (evt.target.classList.contains('question__btn')){
    evt.target.classList.add('js-btn-click');
  }
}

let i = 0;

const toggleQuest = (evt) => {
  if (evt.target.classList.contains('question__btn')){
    evt.target.classList.remove('js-btn-click');
    hiddenQuest[i].classList.add('js-quest-hidden');
    hiddenQuest[i + 1].classList.remove('js-quest-hidden');
  }
  i += 1;
}

document.addEventListener('mousedown', activeBtn);
document.addEventListener('mouseup', toggleQuest);

const hundr = document.querySelector('.hundreds');
const dozen = document.querySelector('.dozen');
const units = document.querySelector('.units');
const orderBtn = document.querySelector('.main-form__btn');

let hundrValue = hundr.innerHTML;
let dozenValue = dozen.innerHTML;
let unitsValue = units.innerHTML;

const userName = document.querySelector('#user-name');
const userPhone = document.querySelector('#user-phone');

const reduceCounter = (evt) => {
  evt.preventDefault(0);

  units.innerHTML = --unitsValue;
  if (unitsValue < 0) {
    units.innerHTML = unitsValue = 9;
    dozen.innerHTML = --dozenValue;
  }
  if (dozenValue < 0) {
    dozen.innerHTML = dozenValue = 9;
    hundr.innerHTML = --hundrValue;
  }
  if (hundrValue < 0) {
    hundr.innerHTML = 0;
    dozen.innerHTML = 0;
    units.innerHTML = 0;
  }
}

orderBtn.addEventListener('click',reduceCounter)
