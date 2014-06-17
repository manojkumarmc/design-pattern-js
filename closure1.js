function sum(a) {
  
  var sum = a 
  
  function f(b) {
    sum += b
    return f
  }
  
  f.toString = function() { 
    return sum 
  }
  
  return f
}

console.log( sum(1)(2) )  // 3
console.log( sum(5)(-1)(2) )  // 6
console.log( sum(6)(-1)(-2)(-3) )  // 0
console.log( sum(0)(1)(2)(3)(4)(5) )  // 15

