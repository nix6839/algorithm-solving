const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const alphabets = input.trim().toUpperCase();

const alphabetCountMap = new Map();

for (let i = 0; i < alphabets.length; i += 1) {
  const alphabet = alphabets[i];
  alphabetCountMap.set(alphabet, (alphabetCountMap.get(alphabet) ?? 0) + 1);
}

function getMaxCountAlphabet() {
  let maxCount = 0;
  let maxCountAlphabet = '?';
  let maxIsMany = false;

  for (const [alphabet, count] of alphabetCountMap) {
    if (count === maxCount) {
      maxIsMany = true;
    } else if (count > maxCount) {
      maxIsMany = false;
      maxCount = count;
      maxCountAlphabet = alphabet;
    }
  }
  if (maxIsMany) {
    return '?';
  }
  return maxCountAlphabet;
}
console.log(getMaxCountAlphabet());
