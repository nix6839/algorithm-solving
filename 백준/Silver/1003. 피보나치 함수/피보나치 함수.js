const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T, ...STR_N_LIST] = input.trim().split('\n');

const N_LIST = STR_N_LIST.map((str) => parseInt(str, 10));

const memo = new Map([
  [0, [1, 0]],
  [1, [0, 1]],
]);

for (let i = 2; i <= 40; i += 1) {
  const [zeroCount1, oneCount1] = memo.get(i - 1);
  const [zeroCount2, oneCount2] = memo.get(i - 2);
  memo.set(i, [zeroCount1 + zeroCount2, oneCount1 + oneCount2]);
}

N_LIST.forEach((N) => {
  console.log(memo.get(N).join(' '));
});
