const alphabet = 'qwertyuiop[]asdfghjkl;"zxcvbnm,./';
const alphabetArr = alphabet.split('');

const firstLine = alphabetArr.slice(0, alphabetArr.indexOf('a'));
const secondLine = alphabetArr.slice(alphabetArr.indexOf('a'), alphabetArr.indexOf('z'));
const thirdLine = alphabetArr.slice(alphabetArr.indexOf('z'));

const keyboard = [firstLine, secondLine, thirdLine];
// var a = keyboard;
// var hello = a[1][5] + a[0][2] + a[1][8] + a[1][8] + a[0][8];
const hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
const javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
const trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];

console.log(hello, javascript, trainer);