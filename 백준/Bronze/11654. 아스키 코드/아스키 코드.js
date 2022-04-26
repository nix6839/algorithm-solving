const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

console.log(input.charCodeAt(0));
