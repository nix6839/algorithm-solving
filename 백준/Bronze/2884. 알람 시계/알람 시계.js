const readFileSync = require('node:fs').readFileSync;

const input = readFileSync('/dev/stdin', 'utf-8');

const [h, m] = input.split(' ').map((str) => parseInt(str, 10));

function getNewAlarmTime(h, m) {
  let newM = m - 45;
  if (newM < 0) {
    let newH = h - 1;
    newM += 60;
    if (newH < 0) {
      return [newH + 24, newM];
    }
    return [newH, newM];
  }
  return [h, newM];
}

const [newH, newM] = getNewAlarmTime(h, m);

console.log(newH, newM);
