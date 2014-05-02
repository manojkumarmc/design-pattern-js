var re = /(\w+)\s(\w+)/;
var str = "manoj kumar";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);

var r1 = /:(.+?)\b/g
var s1 = "/hi/:is/there/:anyone" // expected output is /hi/{is}/there/{anyone}
var s2 = s1.match(r1) // can result in multiple results


var s3 = s1.replace(r1, function(str) {                     // glad that we can chain this
    return "{" + str + "}"
}).replace(/:/g,"")

console.log(s3)
