const readFileSync = require('node:fs').readFileSync;

const input = readFileSync('/dev/stdin', 'utf-8').trim();

console.log(`${input}\?\?!`);
