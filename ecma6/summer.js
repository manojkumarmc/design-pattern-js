"use strict"

function *summer(){
  let x = yield
  console.log(x)
  let y = yield
  console.log(y)
  yield x + y
}

let s = summer()
s.next(10)
s.next(20)
console.log(s.next())
