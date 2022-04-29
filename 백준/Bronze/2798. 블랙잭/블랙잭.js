const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [STR_N_AND_M, STR_CARD_LIST] = input.trim().split('\n');

const [N, M] = STR_N_AND_M.split(' ').map((str) => parseInt(str, 10));
const CARD_LIST = STR_CARD_LIST.split(' ').map((str) => parseInt(str, 10));

let max = -Infinity;
for (let i = 0; i < CARD_LIST.length - 2; i += 1) {
  for (let j = i + 1; j < CARD_LIST.length - 1; j += 1) {
    for (let k = j + 1; k < CARD_LIST.length; k += 1) {
      const sum = CARD_LIST[i] + CARD_LIST[j] + CARD_LIST[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
    }
  }
}
console.log(max);
