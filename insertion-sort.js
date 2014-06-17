var ary = [23, 42, 4, 16, 8, 15];

console.log(ary);

(function() {
    for (var i = 1; i < ary.length; i += 1) {
        var elem = ary[i]
        var j = i
        while ((j > 0) && (ary[j - 1] > elem)) {
            ary[j] = ary[j-1]
            j = j - 1
            ary[j] = elem
        }
        
    }
})()

console.log(ary)
