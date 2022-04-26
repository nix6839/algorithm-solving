const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [dice1, dice2, dice3] = input.split(' ').map((str) => parseInt(str, 10));

function getAllMatchedPrize(dice) {
  return 10_000 + dice * 1_000;
}

function getTwoMatchedPrize(dice) {
  return 1_000 + dice * 100;
}

function getNoMatchedPrize(dice) {
  return dice * 100;
}

function getPrize(dice1, dice2, dice3) {
  if (dice1 === dice2) {
    if (dice2 === dice3) {
      return getAllMatchedPrize(dice1);
    }
    return getTwoMatchedPrize(dice1);
  }
  if (dice3 === dice2 || dice3 === dice1) {
    return getTwoMatchedPrize(dice3);
  }
  return getNoMatchedPrize(Math.max(dice1, dice2, dice3));
}

console.log(getPrize(dice1, dice2, dice3));
