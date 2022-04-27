const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input.trim(), 10);

let max = 1;
let count = 0;
while (true) {
  max += count * 6;
  if (N <= max) {
    console.log(count + 1);
    break;
  }
  count += 1;
}
