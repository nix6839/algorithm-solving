const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [A, B, V] = input.split(' ').map((str) => parseInt(str, 10));

console.log(Math.ceil((V - B) / (A - B)));
