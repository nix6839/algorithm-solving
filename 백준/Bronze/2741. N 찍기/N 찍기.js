const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input, 10);

let result = '';
for (let i = 1; i <= N; i += 1) {
  result += `${i}\n`;
}
console.log(result);
