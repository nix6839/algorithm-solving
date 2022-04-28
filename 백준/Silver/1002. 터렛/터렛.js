const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T, ...STR_POS_R_LIST] = input.trim().split('\n');

const POS_R_LIST = STR_POS_R_LIST.map((STR_POST_R) =>
  STR_POST_R.split(' ').map((str) => parseInt(str, 10)),
);

function getDistanceOfTwoPos(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function getContactCount(x1, y1, r1, x2, y2, r2) {
  if (x1 === x2 && y1 === y2 && r1 === r2) {
    return -1;
  }

  const d = getDistanceOfTwoPos(x1, y1, x2, y2);
  const [minR, maxR] = r1 < r2 ? [r1, r2] : [r2, r1];

  // 두 점에서 만나는 가에 대한 식
  if (maxR - minR < d && d < minR + maxR) {
    return 2;
  }
  // 한 점에서 만나는 가(내접, 외접)에 대한 식
  if (minR + maxR === d || maxR - minR === d) {
    return 1;
  }
  return 0;
}

POS_R_LIST.forEach(([x1, y1, r1, x2, y2, r2]) => {
  console.log(getContactCount(x1, y1, r1, x2, y2, r2));
});
