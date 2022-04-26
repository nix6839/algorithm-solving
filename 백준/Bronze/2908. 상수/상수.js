const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [A_STR, B_STR] = input.trim().split(' ');

function getReversedString(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversedString += str[i];
  }
  return reversedString;
}

const reversedAStr = getReversedString(A_STR);
const reversedBStr = getReversedString(B_STR);

if (reversedAStr > reversedBStr) {
  console.log(reversedAStr);
} else {
  console.log(reversedBStr);
}
