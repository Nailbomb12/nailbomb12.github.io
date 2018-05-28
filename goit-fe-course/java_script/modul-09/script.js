const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
};
const alphabetEn = lang.en;
const keybContainer = document.querySelector('.wrapper');
const html = document.querySelector('#keyb_template').textContent.trim();
const compiled = _.template(html);

const addKeyboardLayout = (lang, indexFirst, indexLast) => {
  const arr = lang.split('');
  const lineArray = [arr.slice(0, arr.indexOf(indexFirst)), 
                     arr.slice(arr.indexOf(indexFirst), arr.indexOf(indexLast)), 
                     arr.slice(arr.indexOf(indexLast))];
                     
  return lineArray;
};

const keybRows = addKeyboardLayout(alphabetEn,'a', 'z');
keybContainer.innerHTML = compiled(keybRows);

const buttons = document.querySelectorAll('.button');

const onClick = (evt) => {
  
  buttons.forEach(val => {
    val.classList.remove('button--active');
  });
  
  if (evt.target.classList.contains('button')) {
    evt.target.classList.add('button--active');
  } 
};

document.addEventListener('click', onClick);

