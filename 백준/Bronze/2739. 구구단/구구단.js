const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const n = parseInt(input.split(' '), 10);

for (let i = 1; i <= 9; i += 1) {
  console.log(`${n} * ${i} = ${n * i}`);
}
