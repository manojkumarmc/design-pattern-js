function Adder(i) {
    return function(j) {
	i = i + j
	return i
    }
    
}

var a = Adder(100);

console.log(a(10))
console.log(a(10))

