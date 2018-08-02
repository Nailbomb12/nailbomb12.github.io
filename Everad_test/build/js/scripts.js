'use strict';

var quesBtn = document.querySelectorAll('.question__btn');
var hiddenQuest = document.querySelectorAll('.question-block');

var activeBtn = function activeBtn(evt) {
  if (evt.target.classList.contains('question__btn')) {
    evt.target.classList.add('js-btn-click');
  }
};

var i = 0;

var toggleQuest = function toggleQuest(evt) {
  if (evt.target.classList.contains('question__btn')) {
    evt.target.classList.remove('js-btn-click');
    hiddenQuest[i].classList.add('js-quest-hidden');
    hiddenQuest[i + 1].classList.remove('js-quest-hidden');
  }
  i += 1;
};

document.addEventListener('mousedown', activeBtn);
document.addEventListener('mouseup', toggleQuest);

var hundr = document.querySelector('.hundreds');
var dozen = document.querySelector('.dozen');
var units = document.querySelector('.units');
var orderBtn = document.querySelector('.main-form__btn');

var hundrValue = hundr.innerHTML;
var dozenValue = dozen.innerHTML;
var unitsValue = units.innerHTML;

var userName = document.querySelector('#user-name');
var userPhone = document.querySelector('#user-phone');

var reduceCounter = function reduceCounter(evt) {
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
};

orderBtn.addEventListener('click', reduceCounter);