const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const X = parseInt(input.trim(), 10);

let max = 0;
let x = X;
while (x > 0) {
  max += 1;
  x -= max;
}

const resultArr = [max + x, 1 - x];
if (max % 2 === 1) {
  resultArr.reverse();
}
console.log(resultArr.join('/'));
