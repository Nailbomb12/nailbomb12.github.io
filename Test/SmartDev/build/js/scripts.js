'use strict';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t / 1000 % 60);
  var minutes = Math.floor(t / 1000 / 60 % 60);
  var hours = Math.floor(t / (1000 * 60 * 60) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var minutes = document.querySelector("#minutes");
  var seconds = document.querySelector("#seconds");
  var hours = document.querySelector("#hours");
  var days = document.querySelector("#days");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    days.innerHTML = t.days;
    hours.innerHTML = ('0' + t.hours).slice(-2);
    minutes.innerHTML = ('0' + t.minutes).slice(-2);
    seconds.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = '2018-08-31';
initializeClock('clockdiv', deadline);

var headBtn = document.querySelector('.header__btn');
var footBtn = document.querySelector('.bottom__btn');

var activeBtn = function activeBtn(evt) {
  if (evt.target.classList.contains('header__btn') || evt.target.classList.contains('bottom__btn')) {
    evt.target.classList.add('js-btn-click');
  }
};
var deActiveBtn = function deActiveBtn(evt) {
  if (evt.target.classList.contains('header__btn') || evt.target.classList.contains('bottom__btn')) {
    evt.target.classList.remove('js-btn-click');
  }
};

document.addEventListener('mousedown', activeBtn);
document.addEventListener('mouseup', deActiveBtn);