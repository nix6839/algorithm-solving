const readFileSync = require('node:fs').readFileSync;

const input = readFileSync('/dev/stdin', 'utf-8');

const score = parseInt(input, 10);

const gradingMap = {
  10: 'A',
  9: 'A',
  8: 'B',
  7: 'C',
  6: 'D',
};

function getGrade(score) {
  return gradingMap[Math.floor(score / 10)] ?? 'F';
}

console.log(getGrade(score));
