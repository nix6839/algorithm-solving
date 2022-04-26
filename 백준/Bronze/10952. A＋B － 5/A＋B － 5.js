const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const A_AND_B_STR_LIST = input.split('\n');

for (const A_AND_B_STR of A_AND_B_STR_LIST) {
  const [A, B] = A_AND_B_STR.split(' ').map((str) => parseInt(str, 10));
  if (A === 0 && B === 0) {
    break;
  }
  console.log(A + B);
}
