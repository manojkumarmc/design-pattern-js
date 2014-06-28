var fn = function(x,y) {
  return x + y
}

var fn1 = function(j,k) {
  return this.i + j + k
}


var x = fn.bind(null , 1)   // 1 is added to the closure
var y = fn1.bind({i:10},1)  // {i:10} is added to the closure

console.log(x(3))           // this will result in 1+3 = 4
console.log(y(2))           // this will result in 10+1+2 = 13
