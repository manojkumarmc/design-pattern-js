function *rander(){
  while (1===1) {
    yield Math.random() * 100
  }
}


r = rander()
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())

