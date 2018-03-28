const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

function addKeyboardLayout(lang, indexFirst, indexAnother) {
  let arr = lang.split('');
  let lineArray = [arr.slice(0, arr.indexOf(indexFirst)), 
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
  keysArr.map((val,idx) => 
    obj.layouts[lang][val] = arr[idx])
}
setObj(keyboard, 'en', keybEn)
setObj(keyboard, 'ru', keybRu)
setObj(keyboard, 'ua', keybUa)
 
function chooseLanguage(obj) {
  let numb;
  do {
    numb = prompt('Please choose language \n0 - En, 1 - Ru, 2 - Ua', '');

    if (numb === '0' || numb === '1' || numb === '2') break;
    if (numb !== '0' || numb !== '1' || numb !== '2') {
      alert ('Please enter correct number');
    }
  } while (numb !== null);
  
  return obj.currentLang = obj.langs[numb];
}

chooseLanguage(keyboard)

function getRandomInt(index) {
  return Math.floor(Math.random() * index);
}

function getRandCharInAlph (obj){
	let currentLangValue = Object.values(obj.layouts[obj.currentLang]);
  let randRow = getRandomInt(currentLangValue.length);
  let randSymb = getRandomInt(currentLangValue[randRow].length);
  return currentLangValue[randRow][randSymb];
}
let randomChar = getRandCharInAlph(keyboard);

console.log(`${randomChar} - случайный символ из алфавита ${keyboard.currentLang}`)