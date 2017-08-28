const fs = require('fs')//nodejs 내장모듈
const data = fs.readFileSync('./calc.js','utf8');
console.log(data);
console.log('done!');