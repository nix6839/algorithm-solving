const { createInterface } = require('node:readline');

const readInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInterface.on('line', (A_AND_B_STR) => {
  const [A, B] = A_AND_B_STR.split(' ').map((str) => parseInt(str, 10));
  console.log(A + B);
});
