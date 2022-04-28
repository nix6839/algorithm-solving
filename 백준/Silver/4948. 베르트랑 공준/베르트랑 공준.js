const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const nList = input
  .trim()
  .split('\n')
  .map((str) => parseInt(str, 10));
nList.pop();

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
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

function getPrimeCount(start, end) {
  let cnt = 0;
  for (let i = start; i <= end; i += 1) {
    if (isPrime(i)) {
      cnt += 1;
    }
  }
  return cnt;
}

nList.forEach((n) => {
  console.log(getPrimeCount(n + 1, n * 2));
});
