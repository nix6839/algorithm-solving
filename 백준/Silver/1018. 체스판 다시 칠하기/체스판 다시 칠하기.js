const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N_AND_M, ...BOARD] = input.trim().split('\n');
const [N, M] = N_AND_M.split(' ').map((str) => parseInt(str, 10));

function rotateN90(toRotateArr) {
  const ret = new Array(toRotateArr[0].length).fill('');
  for (let i = 0; i < toRotateArr.length; i += 1) {
    for (let j = 0; j < toRotateArr[0].length; j += 1) {
      const char = toRotateArr[i][j];
      ret[j] = char + ret[j];
    }
  }
  return ret;
}

function reverseColor(color) {
  return color === 'W' ? 'B' : 'W';
}

function getRepaintCount(board) {
  let cnt = 0;
  let nextColor = board[0][0];
  for (let n = 0; n < board.length; n += 1) {
    for (let m = 0; m < board[0].length; m += 1) {
      if (board[n][m] !== nextColor) {
        cnt += 1;
      }
      nextColor = reverseColor(nextColor);
    }
    nextColor = reverseColor(nextColor);
  }
  return cnt;
}

function getMinRepaintCount(n, m) {
  const maxNOffset = n - 8;
  const maxMOffset = m - 8;

  let minRepaintCount = Infinity;
  for (let nOffset = 0; nOffset <= maxNOffset; nOffset += 1) {
    const eightLinesBoard = BOARD.slice(nOffset, nOffset + 8);
    for (let mOffset = 0; mOffset <= maxMOffset; mOffset += 1) {
      let board88 = eightLinesBoard.map((line) =>
        line.slice(mOffset, mOffset + 8),
      );
      for (let i = 0; i < 4; i += 1) {
        board88 = rotateN90(board88);
        const repaintCount = getRepaintCount(board88);
        if (repaintCount < minRepaintCount) {
          minRepaintCount = repaintCount;
        }
      }
    }
  }
  return minRepaintCount;
}

console.log(getMinRepaintCount(N, M));
