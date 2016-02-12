"use strict";

function *fibanacci(){
  let [a,b] = [0,1]
  yield a
  yield b
  while (1===1) {
    [a, b] = [b, a+b]
    yield b
  }
}

f = fibanacci()
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
