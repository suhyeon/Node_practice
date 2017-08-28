// chaining.js
const tenSec = require('./promise')
tenSec('hello promise')
  .then(value => {
    console.log(value)
    return 1 // 위 `.then`은 값이 1인 Promise를 반환함
  })
  .then(value => {
    console.log(value)
    return tenSec('new promise') // Promise도 반환할 수 있음
  })
  .then(value => { //promise가 아닌값은 그냥 그대로 value로 들어가고
    console.log(value) //promise 인 값은 그 안의 값만 value로 들어간다.
  })
  .then(() => {
    throw new Error('error in promise')
  })
  .catch(err => { //catch위에 있던 코드에서 에러가 나면 catch가 실행
    console.error(err)   //catch역시 promise반환
  })
  .then(() => { // 에러 처리 이후에도 코드 실행 가능
    console.log('done')
  })