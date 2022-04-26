const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input, 10);

function getCycle(originN) {
  let currentN = originN;
  for (let cycle = 1; ; cycle += 1) {
    const sum = Math.floor(currentN / 10) + (currentN % 10);
    currentN = (currentN % 10) * 10 + (sum % 10);
    if (currentN === originN) {
      return cycle;
    }
  }
}

console.log(getCycle(N));
