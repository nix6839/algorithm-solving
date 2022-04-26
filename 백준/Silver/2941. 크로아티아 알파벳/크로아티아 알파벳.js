const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const word = input.trim();

const CROTIA_REPLACERS = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let crotiaCount = 0;
for (let i = 0; i < word.length; i += 1) {
  const twoLetters = word.slice(i, i + 2);
  const threeLetters = word.slice(i, i + 3);
  if (CROTIA_REPLACERS.includes(twoLetters)) {
    i += 1;
  } else if (CROTIA_REPLACERS.includes(threeLetters)) {
    i += 2;
  }
  crotiaCount += 1;
}
console.log(crotiaCount);
