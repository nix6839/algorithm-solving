const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const alphabetWord = input.trim();

function generalGetNumber(alphabet, offsetAlphabet, offset) {
  const alphabetAscii = alphabet.charCodeAt(0);
  const offsetAscii = offsetAlphabet.charCodeAt(0);
  return Math.floor((alphabetAscii - offsetAscii) / 3) + offset;
}

function getNumber(alphabet) {
  if (alphabet === 'S') {
    return 7;
  }
  if (alphabet === 'Z') {
    return 9;
  }
  if (alphabet < 'S') {
    return generalGetNumber(alphabet, 'A', 2);
  }
  return generalGetNumber(alphabet, 'T', 8);
}

function getDuration(number) {
  return number + 1;
}

let totalTime = 0;
for (let i = 0; i < alphabetWord.length; i += 1) {
  const alphabet = alphabetWord[i];
  const number = getNumber(alphabet);
  totalTime += getDuration(number);
}
console.log(totalTime);
