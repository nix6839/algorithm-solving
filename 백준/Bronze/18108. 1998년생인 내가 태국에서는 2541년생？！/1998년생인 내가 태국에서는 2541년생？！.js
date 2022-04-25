const readFileSync = require('node:fs').readFileSync;

const input = readFileSync('/dev/stdin', 'utf-8');

const bulGiYear = parseInt(input, 10);

console.log(getADYearFromBulGiYear(bulGiYear));

function getADYearFromBulGiYear(bulGiYear) {
  return bulGiYear - 543;
}
