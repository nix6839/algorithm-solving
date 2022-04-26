const notSelfNumberMap = new Map();

function getDigitsSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function setNotSelfNumber(n) {
  if (n > 10000) {
    return;
  }
  const nextN = n + getDigitsSum(n);
  notSelfNumberMap.set(nextN, true);
  setNotSelfNumber(nextN);
}

for (let i = 1; i <= 10000; i += 1) {
  setNotSelfNumber(i);
}
for (let i = 1; i <= 10000; i += 1) {
  if (!notSelfNumberMap.has(i)) {
    console.log(i);
  }
}
