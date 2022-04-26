const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const TWO_DIGIT_N = input.trim().padStart(2, '0');

function getCycle(originN) {
  let currentN = originN;
  for (let cycle = 1; ; cycle += 1) {
    const sum = parseInt(currentN[0], 10) + parseInt(currentN[1], 10);
    const twoDigitSum = sum.toString().padStart(2, '0');
    currentN = currentN[1] + twoDigitSum[1];

    if (originN === currentN) {
      return cycle;
    }
  }
}

console.log(getCycle(TWO_DIGIT_N));
