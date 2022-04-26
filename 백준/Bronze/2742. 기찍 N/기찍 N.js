const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input, 10);

let result = '';
for (let i = N; i > 0; i -= 1) {
  result += `${i}\n`;
}
console.log(result);
