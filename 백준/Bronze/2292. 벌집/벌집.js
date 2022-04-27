const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input.trim(), 10);

let count = 0;
for (let max = 1; max < N; max += count * 6) {
  count += 1;
}
console.log(count + 1);
