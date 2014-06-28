console.log("typeof 1        :" + typeof 1)
console.log("typeof Hi       :" + typeof "Hi")
console.log("typeof null     :" + typeof null)
console.log("typeof undefined:" + typeof undefined)
console.log("typeof {}       :" + typeof {})
console.log("typeof NaN      :" + typeof NaN)
console.log("typeof []       :" + typeof [])

var Emp = function() {
}

console.log("typeof Emp      :" + typeof Emp)

e1 = new Emp()
e2 = new Emp()

e1 instanceof Emp

if (typeof Emp === 'function') {
  console.log("t")
} else {
  console.log("f")
}
