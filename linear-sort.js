var ary = [4,56,34,3,56,90,-9,32,-123,35,14]

var min = 4
var max = 4

for (var i = 0; i < ary.length; i++) {

    if (ary[i] > max) {
        max = ary[i]
    }

    if (ary[i] < min) {
        min = ary[i]
    }
}

console.log('Max :' + max)
console.log('Min :' + min)
