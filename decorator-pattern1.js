function Worker(intParam) {
    return Math.random() * 10
}

function CachedCall(fn) {
    var cache = {}

    function Call(intParam) {
	if (!(intParam in cache)) {
	    cache[intParam] = fn.call(this, intParam)
	}
	return cache[intParam]
    }

    Call.Flush = function() {
	cache = {}
    }

    return Call
}

cl = CachedCall(Worker)

console.log(cl(10))
console.log(cl(10))
console.log(cl(10))

cl.Flush()

console.log(cl(10))
console.log(cl(10))
console.log(cl(10))


