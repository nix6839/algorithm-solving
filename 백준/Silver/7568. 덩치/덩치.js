const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N, ...STR_X_AND_Y_LIST] = input.trim().split('\n');
const X_AND_Y_LIST = STR_X_AND_Y_LIST.map((STR_X_AND_Y) =>
  STR_X_AND_Y.split(' ').map((str) => parseInt(str, 10)),
);

function rankBuild([x, y]) {
  let rank = 1;
  X_AND_Y_LIST.forEach(([p, q]) => {
    if (x < p && y < q) {
      rank += 1;
    }
  });
  return rank;
}
const ranks = X_AND_Y_LIST.map(rankBuild);

console.log(ranks.join(' '));
