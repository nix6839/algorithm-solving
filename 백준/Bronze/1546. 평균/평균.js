const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N, scoresStr] = input.trim().split('\n');
const scores = scoresStr.split(' ').map((scoreStr) => parseInt(scoreStr, 10));

function makeGetFakeScore(salt) {
  return (score) => (score / salt) * 100;
}
const salt = Math.max(...scores);

const getFakeScore = makeGetFakeScore(salt);

const fakeSum = scores.reduce((sum, score) => sum + getFakeScore(score), 0);
console.log(fakeSum / scores.length);
