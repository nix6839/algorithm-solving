const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const N = parseInt(input.trim(), 10);

const lines = new Array(N).fill('');

function addAtomSquare(offset) {
  lines[offset] += '***';
  lines[offset + 1] += '* *';
  lines[offset + 2] += '***';
}

function addSpaceSquare(n, offset) {
  const spaces = ' '.repeat(n);
  for (let i = 0; i < n; i += 1) {
    lines[offset + i] += spaces;
  }
}

function addSquare(n, prevOffset = 0) {
  if (n === 3) {
    addAtomSquare(prevOffset);
    return;
  }
  const nDivisionThree = n / 3;
  for (let i = 0; i < 9; i += 1) {
    let offset = Math.floor(i / 3) * nDivisionThree + prevOffset;
    // 가운데 공백
    if (i === 4) {
      addSpaceSquare(nDivisionThree, offset);
      continue;
    }
    addSquare(nDivisionThree, offset);
  }
}

addSquare(N);
console.log(lines.join('\n'));
