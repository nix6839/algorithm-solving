const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const A_AND_B_STR_LIST = input.split('\n');
const A_AND_B_LIST = A_AND_B_STR_LIST.map((A_AND_B_STR) =>
  A_AND_B_STR.split(' ').map((str) => parseInt(str, 10)),
);

for (const [A, B] of A_AND_B_LIST) {
  if (A === 0 && B === 0) {
    break;
  }
  console.log(A + B);
}
