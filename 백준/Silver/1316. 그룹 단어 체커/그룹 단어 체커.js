const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N, ...words] = input.trim().split('\n');

function isGroupWord(word) {
  const duplicationCheckMap = new Map();
  let prevLetter;
  for (let i = 0; i < word.length; i += 1) {
    const letter = word[i];
    if (prevLetter === letter) {
      continue;
    }
    if (duplicationCheckMap.has(letter)) {
      return false;
    }
    duplicationCheckMap.set(letter, true);
    prevLetter = letter;
  }
  return true;
}

console.log(words.filter(isGroupWord).length);
