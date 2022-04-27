const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

let n = parseInt(input.trim(), 10);

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

function* primeGenerator() {
  yield 2;
  for (let i = 3; ; i += 2) {
    if (isPrime(i)) {
      yield i;
    }
  }
}

const primeGenerate = primeGenerator();

let prime = primeGenerate.next().value;
while (n > 1) {
  if (n % prime === 0) {
    n /= prime;
    console.log(prime);
    continue;
  }
  prime = primeGenerate.next().value;
}