var a = function() {
    console.log('a')
}

var b = function() {
    console.log('b')
}

var fn = function(fns) {
    for (var i=0; i<fns.length; i++) {
        fns[i]()
    }
}

fn([a,b])

var d = function() {
    console.log(arguments.callee.name)
}

d(1,2)
