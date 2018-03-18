const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
  const alphabetArr = alphabet.split('');
  const firstLine = alphabetArr.slice(0, alphabetArr.indexOf('a'));
  const secondLine = alphabetArr.slice(alphabetArr.indexOf('a'), alphabetArr.indexOf('z'));
  const thirdLine = alphabetArr.slice(alphabetArr.indexOf('z'));
  const lineArray = [firstLine, secondLine, thirdLine];
    return lineArray;
}

const keyboard = addKeyboardLayout(alphabet);

console.log(keyboard)


function getRandCharInRow(row) {
  const randomSymb = Math.floor(Math.random() * keyboard[row].length);
  return keyboard[row][randomSymb];
}

console.log(`Random symbol on a row "${getRandCharInRow(2)}"`);

function getRandCharInAlph(keyboard) {
  const randomString = Math.floor(Math.random() * keyboard.length);
  return getRandCharInRow(randomString);
}

console.log(`Random keyboard symbol  "${getRandCharInAlph(keyboard)}"`);