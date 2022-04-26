const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [A, B, C] = input
  .trim()
  .split(' ')
  .map((str) => parseInt(str, 10));

const netProfit = C - B;
if (netProfit <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(A / netProfit) + 1);
}
