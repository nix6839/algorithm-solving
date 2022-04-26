const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T_STR, ...aAndBStrs] = input.split('\n');
const T = parseInt(T_STR, 10);

for (let i = 0; i < T; i += 1) {
  const x = i + 1;
  const [A, B] = aAndBStrs[i].split(' ').map((str) => parseInt(str, 10));
  console.log(`Case #${x}: ${A} + ${B} = ${A + B}`);
}
