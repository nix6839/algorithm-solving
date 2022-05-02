const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input.trim(), 10);

function isEndNumber(n) {
  const strN = n.toString();
  let cnt = 0;
  for (let i = 0; i < strN.length; i += 1) {
    if (strN[i] === '6') {
      cnt += 1;
    } else {
      cnt = 0;
    }
    if (cnt === 3) {
      return true;
    }
  }
  return false;
}

let number = 666;
let cnt = 1;
while (cnt < N) {
  number += 1;
  if (isEndNumber(number)) {
    cnt += 1;
  }
}
console.log(number);
