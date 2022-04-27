const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [A, B] = input
  .trim()
  .split(' ')
  .map((str) => BigInt(str));

console.log((A + B).toString());
