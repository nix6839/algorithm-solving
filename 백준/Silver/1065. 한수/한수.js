const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input, 10);

function isAP(numbers) {
  const diff = numbers[0] - numbers[1];
  for (let i = 2; i < numbers.length; i += 1) {
    const prevNumber = numbers[i - 1];
    const currentNumber = numbers[i];
    if (prevNumber - currentNumber !== diff) {
      return false;
    }
  }
  return true;
}

function isHansu(n) {
  const digits = [...n.toString()];
  return isAP(digits);
}

let count = 0;
for (let i = 1; i <= N; i += 1) {
  if (isHansu(i)) {
    count += 1;
  }
}
console.log(count);
