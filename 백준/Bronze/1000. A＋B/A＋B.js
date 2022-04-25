const readFileSync = require('node:fs').readFileSync;

const input = readFileSync('/dev/stdin').toString();
const [a, b] = input.split(' ').map((str) => parseInt(str, 10));
console.log(a + b);
