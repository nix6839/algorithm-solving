const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T, ...aAndBStrs] = input.split('\n');

for (let i = 0; i < T; i += 1) {
  const [A, B] = aAndBStrs[i].split(' ').map((str) => parseInt(str, 10));
  console.log(A + B);
}
