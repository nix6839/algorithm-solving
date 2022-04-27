const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

let n = parseInt(input.trim(), 10);

let count = 0;
while (n > 0) {
  if (n % 5 === 0) {
    count += n / 5;
    break;
  }
  count += 1;
  n -= 3;
}
console.log(n < 0 ? -1 : count);
