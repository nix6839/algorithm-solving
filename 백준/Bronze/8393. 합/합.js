const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const n = parseInt(input, 10);

console.log((1 + n) * (n / 2));
