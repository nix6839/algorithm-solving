const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const R = parseInt(input.trim(), 10);

function taxicabGeometry(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const R_SQUARE = R ** 2;

console.log(R_SQUARE * Math.PI);
console.log(R_SQUARE * 2);
