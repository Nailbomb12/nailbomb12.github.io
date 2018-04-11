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

function getRandomInt(index) {
  return Math.floor(Math.random() * index.length);
}

function getRandCharInAlph (obj){
  if (obj.currentLang == '') return;
  
	let currentLangValue = Object.values(obj.layouts[obj.currentLang]);
  let randRow = getRandomInt(currentLangValue);
  let randSymb = getRandomInt(currentLangValue[randRow]);
  
  console.log(`${currentLangValue[randRow][randSymb]} - случайный символ из алфавита ${keyboard.currentLang}`)
}
getRandCharInAlph(keyboard);

