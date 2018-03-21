const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
  const alphabetArr = alphabet.split('');
  const lineArray = [alphabetArr.slice(0, alphabetArr.indexOf("a")), alphabetArr.slice(alphabetArr.indexOf("a"), alphabetArr.indexOf("z")),                   alphabetArr.slice(alphabetArr.indexOf("z"))];
  return lineArray;
}

const keyboard = addKeyboardLayout(alphabet);

console.log(keyboard)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const anyCharacter = function getRandCharInRow(row) {
  const randomSymb = getRandomInt(0, keyboard[row].length);
  return keyboard[row][randomSymb];
}

console.log(`Random symbol on a row "${anyCharacter(2)}"`);

function getRandCharInAlph() {
  const randomString = getRandomInt(0, keyboard.length);
  return anyCharacter(randomString);
}

console.log(`Random keyboard symbol  "${getRandCharInAlph(keyboard)}"`);