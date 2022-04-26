const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const numbers = input
  .trim()
  .split('\n')
  .map((str) => parseInt(str, 10));

const remainderMap = new Map();
numbers.forEach((number) => {
  remainderMap.set(number % 42, true);
});
console.log(remainderMap.size);
