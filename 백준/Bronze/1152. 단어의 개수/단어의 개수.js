const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();

if (input === '' || input === ' ') {
  console.log(0);
} else {
  const text = input.split(' ');
  console.log(text.length);
}
