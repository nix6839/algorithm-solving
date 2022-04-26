const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N_AND_X, A_STR] = input.split('\n');

const [N, X] = N_AND_X.split(' ').map((str) => parseInt(str, 10));
const A = A_STR.split(' ').map((str) => parseInt(str, 10));

console.log(A.filter((num) => num < X).join(' '));
