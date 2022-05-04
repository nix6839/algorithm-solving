const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N, ...STR_NUMBERS] = input.trim().split('\n');
const numbers = STR_NUMBERS.map((str) => parseInt(str, 10));

for (let i = 0; i < numbers.length - 1; i += 1) {
  for(let j = i + 1; j < numbers.length; j += 1) {
    if (numbers[i] > numbers[j]) {
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  }
}
console.log(numbers.join('\n'));
