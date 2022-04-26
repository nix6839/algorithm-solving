const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T, ...aAndBStrs] = input.split('\n');

let result = '';
for (let i = 0; i < T; i += 1) {
  const [a, b] = aAndBStrs[i].split(' ').map((str) => parseInt(str, 10));
  result += `${a + b}\n`;
}
console.log(result);
