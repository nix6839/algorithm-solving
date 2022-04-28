const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

// length: 3
const [[x1, y1], [x2, y2], [x3, y3]] = input
  .trim()
  .split('\n')
  .map((str) => str.split(' ').map((str) => parseInt(str, 10)));

function getOther(n1, n2, n3) {
  if (n1 === n2) {
    return n3;
  }
  if (n2 === n3) {
    return n1;
  }
  if (n3 === n1) {
    return n2;
  }
}

const lastX = getOther(x1, x2, x3);
const lastY = getOther(y1, y2, y3);
console.log(`${lastX} ${lastY}`);
