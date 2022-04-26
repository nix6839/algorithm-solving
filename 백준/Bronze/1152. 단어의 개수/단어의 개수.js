const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const sentence = input.trim();

const words = sentence.split(' ').filter((word) => word != '');
console.log(words.length);
