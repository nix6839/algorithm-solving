const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [x, y, w, h] = input
  .trim()
  .split(' ')
  .map((str) => parseInt(str, 10));

console.log(Math.min(w - x, x, h - y, y));
