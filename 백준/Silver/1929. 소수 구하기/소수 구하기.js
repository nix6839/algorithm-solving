const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

let [M, N] = input
  .trim()
  .split(' ')
  .map((str) => parseInt(str, 10));

const isPrime = new Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

const MAX = Math.floor(Math.sqrt(N));
for (let prime = 2; prime <= MAX; prime += 1) {
  if (!isPrime[prime]) {
    continue;
  }
  for (let i = 2; prime * i <= N; i += 1) {
    isPrime[prime * i] = false;
  }
}

for (let i = M; i <= N; i += 1) {
  if (isPrime[i]) {
    console.log(i);
  }
}
