const readline = require('node:readline');

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getQuadrant(x, y) {
  if (x > 0) {
    if (y > 0) {
      return 1;
    } else if (y < 0) {
      return 4;
    }
  } else if (x < 0) {
    if (y > 0) {
      return 2;
    } else if (y < 0) {
      return 3;
    }
  }
}

const inputs = [];
readInterface
  .on('line', (line) => {
    inputs.push(line);
  })
  .on('close', () => {
    const [x, y] = inputs.map((str) => parseInt(str, 10));
    console.log(getQuadrant(x, y));
  });
