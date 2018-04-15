const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

function addKeyboardLayout(lang, indexFirst, indexAnother) {
  const arr = lang.split('');
  const lineArray = [arr.slice(0, arr.indexOf(indexFirst)), 
                   arr.slice(arr.indexOf(indexFirst), arr.indexOf(indexAnother)),
                   arr.slice(arr.indexOf(indexAnother))];
  return lineArray;
};

const keybEn = addKeyboardLayout(alphabetEn, 'a', 'z');
const keybRu = addKeyboardLayout(alphabetRu, 'ф', 'я');
const keybUa = addKeyboardLayout(alphabetUa, 'ф', 'я');
 
const keyboard = {
  layouts: {
    en: {
      topRow: [],
      middleRow: [],
      bottomRow: []
    },
    ru: {
      topRow: [],
      middleRow: [],
      bottomRow: []
    },
    ua: {
      topRow: [],
      middleRow: [],
      bottomRow: []
    }
  },
  langs: ['en', 'ru', 'ua'],
  currentLang: ''
};

function setObj(obj, lang, arr){
  let keysArr = Object.keys(obj.layouts[lang]);
  for(let i = 0; i <= 2; i++){
    obj.layouts[lang][keysArr[i]] = arr[i];
  }
}
setObj(keyboard, 'en', keybEn)
setObj(keyboard, 'ru', keybRu)
setObj(keyboard, 'ua', keybUa)

function chooseLanguage(obj) {
  let langChoise = '';
  do {
    langChoise = prompt('Please choose language \n0 - En, 1 - Ru, 2 - Ua', '');
    if (langChoise === '0' || langChoise === '1' || langChoise === '2') break;
    if (langChoise === null) return; 
      alert ('Please enter correct number');
  } while (true);
  return obj.currentLang = obj.langs[langChoise];
}

chooseLanguage(keyboard)

function createLayout(obj) {
  if (obj.currentLang == '') return;
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  
  const keybArr = Object.values(obj.layouts[obj.currentLang]);
  
  for (let i = 0; i < keybArr.length; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    
    for (let j = 0; j < keybArr[i].length; j++){
      let key = document.createElement('button');
      key.classList.add('button');
      key.textContent = `${keybArr[i][j]}`;
      row.appendChild(key);
   }
    wrapper.appendChild(row)
  }
  document.body.appendChild(wrapper)
  return wrapper;
}

createLayout(keyboard)