const readFileSync = require('node:fs').readFileSync;

const input = readFileSync('/dev/stdin', 'utf-8');

const [str1, str2] = input.split('\n');
const n1 = parseInt(str1, 10);

for (let i = 2; i >= 0; i -= 1) {
  console.log(n1 * parseInt(str2[i], 10));
}
console.log(n1 * parseInt(str2, 10));
