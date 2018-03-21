const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
  const alphabetArr = alphabet.split('');
  const lineArray = [alphabetArr.slice(0, alphabetArr.indexOf("a")), alphabetArr.slice(alphabetArr.indexOf("a"), alphabetArr.indexOf("z")),                   alphabetArr.slice(alphabetArr.indexOf("z"))];
  return lineArray;
}

const keyboard = addKeyboardLayout(alphabet);

console.log(keyboard)

function getRandomInt(index) {
  return Math.floor(Math.random() * index);
}

const anyCharacter = function getRandCharInRow(row) {
  const randomSymb = getRandomInt(keyboard[row].length);
  return keyboard[row][randomSymb];
}

console.log(`Random symbol on a row "${anyCharacter(2)}"`);

function getRandCharInAlph() {
  const randomString = getRandomInt(keyboard.length);
  return anyCharacter(randomString);
}

console.log(`Random keyboard symbol  "${getRandCharInAlph(keyboard)}"`);