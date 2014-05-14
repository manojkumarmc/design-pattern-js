function curry(func) {
    var args = Array.prototype.slice.call(arguments)
    return function() {
	return func.apply(null, args.concat(Array.prototype.slice.call(arguments)))
    }
}

var inc = curry(function add(a,b) {
    return a + b
}, 1)

console.log(inc(6))
