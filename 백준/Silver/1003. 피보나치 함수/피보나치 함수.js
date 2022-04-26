const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T, ...STR_N_LIST] = input.trim().split('\n');

const N_LIST = STR_N_LIST.map((str) => parseInt(str, 10));

const memo = {
  0: [1, 0],
  1: [0, 1],
};

for (let i = 2; i <= 40; i += 1) {
  const [zeroCount1, oneCount1] = memo[i - 1];
  const [zeroCount2, oneCount2] = memo[i - 2];
  memo[i] = [zeroCount1 + zeroCount2, oneCount1 + oneCount2];
}

let answer = '';
for (const N of N_LIST) {
  answer += `${memo[N].join(' ')}\n`;
}
console.log(answer);
