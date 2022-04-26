const i = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
if(i===''||i===' '){console.log(0);}else{const b=i.split(' ');console.log(b.length);}