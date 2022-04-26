const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T, ...strTestCases] = input.trim().split('\n');

strTestCases.forEach((strTestCase) => {
  const [STR_R, S] = strTestCase.split(' ');
  const R = parseInt(STR_R, 10);

  let P = '';
  for (let i = 0; i < S.length; i += 1) {
    const char = S[i];
    P += char.repeat(R);
  }
  console.log(P);
});
