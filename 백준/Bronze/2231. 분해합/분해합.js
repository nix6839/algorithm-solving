const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input.trim(), 10);

function getDecomposeNumber(n) {
  const sumOfDigits = [...n.toString()].reduce(
    (sum, digit) => sum + parseInt(digit, 10),
    0,
  );
  return sumOfDigits + n;
}

function getConstructor(n) {
  for (let i = 1; i < N; i += 1) {
    if (getDecomposeNumber(i) === n) {
      return i;
    }
  }
}

const constructor = getConstructor(N) || 0;
console.log(constructor);
