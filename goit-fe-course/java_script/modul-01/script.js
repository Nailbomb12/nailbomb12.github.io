const firstLine = 'qwertyiop[]';
const secondLine = "asdfghjkl;'";
const thirdLine = 'zxcvbnm,./';

const lenOne = firstLine.length;
const lenTwo = secondLine.length;
const lenThree = thirdLine.length;

console.log(firstLine.charAt(0));
console.log(firstLine.charAt(lenOne-1));

console.log(secondLine.charAt(0));
console.log(secondLine.charAt(lenTwo-1));

console.log(thirdLine.charAt(0));
console.log(thirdLine.charAt(lenThree-1));


let bracket = firstLine.indexOf('[');
let revBracket = firstLine.indexOf(']');

const allVariables = 
`firstLine = ${firstLine}, secondLine = ${secondLine}, thirdLine = ${thirdLine}, 
  lenOne = ${lenOne}, lenTwo = ${lenTwo}, lenThree = ${lenThree},
    const lenOne = ${lenOne}, const lenTwo = ${lenTwo}, const lenThree = ${lenThree},
      The first symbol of firstLine is "${firstLine.charAt(0)}", The last symbol of firstLine is "${firstLine.charAt(lenOne-1)}",
      The first symbol of secondLine is "${secondLine.charAt(0)}", The last symbol of secondLine is "${secondLine.charAt(lenOne-1)}",
      The first symbol of thirdLine is "${thirdLine.charAt(0)}", The last symbol of thirdLine is "${thirdLine.charAt(lenOne-1)}",
        let bracket = ${bracket}, let revBracket = ${revBracket}`;
console.log(allVariables);