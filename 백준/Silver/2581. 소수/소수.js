const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [M, N] = input
  .trim()
  .split('\n')
  .map((str) => parseInt(str, 10));

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  const MAX = Math.floor(Math.sqrt(number));
  for (let i = 3; i <= MAX; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let sum = 0;
let min;
for (let i = M; i <= N; i += 1) {
  if (isPrime(i)) {
    if (min === undefined) {
      min = i;
    }
    sum += i;
  }
}
if (min === undefined) {
  console.log(-1);
} else {
  console.log(`${sum}\n${min}`);
}
