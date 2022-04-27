const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input.trim(), 10);

let min;
for (let i = 0; i <= N; i += 3) {
  for (let j = 0; i + j <= N; j += 5) {
    if (i + j === N) {
      min = Math.min(min ?? Infinity, i / 3 + j / 5);
      break;
    }
  }
}
console.log(min ?? -1);
