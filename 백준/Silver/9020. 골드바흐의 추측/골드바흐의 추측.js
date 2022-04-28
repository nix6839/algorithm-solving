const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T, ...EVEN_N_LIST] = input
  .trim()
  .split('\n')
  .map((str) => parseInt(str, 10));

function isPrime(n) {
  if (n === 2) {
    return true;
  }
  if (n < 2 || n % 2 === 0) {
    return false;
  }
  const MAX = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= MAX; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getGoldbach(evenN) {
  const HALF = evenN / 2;
  for (let i = HALF; i >= 2; i -= 1) {
    if (isPrime(i)) {
      const diff = evenN - i;
      if (isPrime(diff)) {
        return [i, diff];
      }
    }
  }
}

EVEN_N_LIST.forEach((evenN) => {
  console.log(getGoldbach(evenN).join(' '));
});
