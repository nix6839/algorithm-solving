const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [C, ...testCasesStrs] = input.trim().split('\n');

function getAverage(...numbers) {
  const sum = numbers.reduce((sum, number) => sum + number);
  return sum / numbers.length;
}

testCasesStrs.forEach((testCasesStr) => {
  const [N, ...scores] = testCasesStr
    .split(' ')
    .map((testCaseStr) => parseInt(testCaseStr, 10));
  const average = getAverage(...scores);
  const overCount = scores.filter((score) => score > average).length;
  const overPercent = (overCount / scores.length) * 100;
  console.log(`${overPercent.toFixed(3)}%`);
});
