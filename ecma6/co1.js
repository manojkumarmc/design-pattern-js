
function* mygen() {
    yield "a"
    var x = yield 
    var y = yield 
    return x + y
}

var g = mygen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next(100).value);
console.log(g.next(200).value);
