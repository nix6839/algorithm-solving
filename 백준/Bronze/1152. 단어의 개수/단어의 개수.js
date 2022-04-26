const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const sentence = input.trim();

if (sentence === '') {
  console.log(0);
} else {
  const words = sentence.split(' ');
  console.log(words.length);
}
