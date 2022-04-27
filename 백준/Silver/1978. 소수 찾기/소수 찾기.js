const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N, STR_NUMBER_LIST] = input.trim().split('\n');

const numbers = STR_NUMBER_LIST.split(' ').map((str) => parseInt(str, 10));

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
  const MAX = Math.sqrt(number);
  for (let i = 3; i <= MAX; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(numbers.filter(isPrime).length);
