//readfile.js
const fs = require('fs') // node.js 내장모듈
fs.readFile('./calc.js', 'utf8', (err,data)=> {
  //비동기식 코드 에러처리
  if(err){
    console.error(err);
  }else{
    console.log(data);
  }
});
console.log('done!');