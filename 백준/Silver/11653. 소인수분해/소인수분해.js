const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

let n = parseInt(input.trim(), 10);

for (let i = 2; i * i <= n; i += 1) {
  while (n % i === 0) {
    console.log(i);
    n /= i;
  }
}
if (n !== 1) {
  console.log(n);
}
