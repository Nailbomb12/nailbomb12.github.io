/*
const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const onClick = (evt) => {
  buttons.forEach(val => {
    val.classList.remove('keyboard__btn--active')
  
  if (evt.target.classList.contains('keyboard__btn')){
      evt.target.classList.add('keyboard__btn--active');
      playSound(evt.target.getAttribute('data-note'))
  }
  });
}
window.addEventListener('click', onClick);

const pressKey = (evt) => {  
  keys.forEach((key, i) => {
    
    if (evt.key === key){
      buttons[i].classList.add('keyboard__btn--active');
      playSound(buttons[i].getAttribute('data-note'));
    } else {
      buttons[i].classList.remove('keyboard__btn--active');
    }
  })
}
window.addEventListener('keydown', pressKey);

const checkBox = document.querySelector('#slideThree');
const audio = document.querySelectorAll('audio'); 

const switchSound = () => {
  audio.forEach((val, i) => {
    if (checkBox.checked) {
      audio[i].muted = false;
    } else {
      audio[i].muted = true;
    }
  })
};

checkBox.addEventListener('change', switchSound);
*/

// функция видит текущее окружение на момент вызова
var inner  = "Global";
var outer  = "Global";
var global = "Global";

function outside () {
  var inner  = "Outside";
  var outer  = "Outside";
  
  function inside() {
    var inner = "Inside";
    console.log(`inner  = ${inner}` );
    console.log(`outer  = ${outer}` );
    console.log(`global = ${global}`);
  }
  return inside;
}

// присвоим функции foo функцию inside
let foo = outside();

// сделаем вызов функции inside, вызвав функцию foo
foo(); 

// результат вызова:
// "inner  = Inside
// "outer  = Outside"
// "global = Global"

























