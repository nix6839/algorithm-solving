const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const alphaIndexMap = new Map();

for (let i = 0; i < input.length; i += 1) {
  const char = input[i];
  if (!alphaIndexMap.has(char)) {
    alphaIndexMap.set(char, i);
  }
}

const aAscii = 'a'.charCodeAt(0);
const zAscii = 'z'.charCodeAt(0);
for (let alphaAscii = aAscii; alphaAscii <= zAscii; alphaAscii += 1) {
  const alpha = String.fromCharCode(alphaAscii);
  const alphaFirstIndex = alphaIndexMap.get(alpha) ?? -1;
  process.stdout.write(`${alphaFirstIndex} `);
}
