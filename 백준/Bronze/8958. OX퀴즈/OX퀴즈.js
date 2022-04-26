const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [N, ...quizResults] = input.trim().split('\n');

quizResults.forEach((quizResult) => {
  let count = 0;
  let score = 0;
  for (let i = 0; i < quizResult.length; i += 1) {
    const result = quizResult[i];
    if (result === 'X') {
      count = 0;
      continue;
    }
    count += 1;
    score += count;
  }
  console.log(score);
});

