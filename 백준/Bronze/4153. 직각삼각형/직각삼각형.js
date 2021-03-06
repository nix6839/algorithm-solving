const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

// length: 3
const STR_TEST_CASES = input.trim().split('\n');
STR_TEST_CASES.pop();

function isRightTriangle(hypotenuse, side1, side2) {
  return hypotenuse ** 2 === side1 ** 2 + side2 ** 2;
}

STR_TEST_CASES.forEach((STR_TEST_CASE) => {
  const sides = STR_TEST_CASE.split(' ').map((str) => parseInt(str, 10));
  const [hypotenuse, side1, side2] = sides.sort((a, b) => b - a);
  if (!isRightTriangle(hypotenuse, side1, side2)) {
    console.log('wrong');
    return;
  }
  console.log('right');
});
