const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

let [M, N] = input
  .trim()
  .split(' ')
  .map((str) => parseInt(str, 10));

const primeMap = new Map(
  Array.from({ length: N - M + 1 }, (v, i) => [i, i + M]),
);
if (primeMap.get(0) === 1) {
  primeMap.delete(0);
}

const MAX = Math.sqrt(N);
for (let checkNumber = 2; checkNumber <= MAX; checkNumber += 1) {
  for ([index, currentNumber] of primeMap.entries()) {
    if (currentNumber !== checkNumber && currentNumber % checkNumber === 0) {
      primeMap.delete(index);
    }
  }
}
primeMap.forEach((prime) => {
  console.log(prime);
});
