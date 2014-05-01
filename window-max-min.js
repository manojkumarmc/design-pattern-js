var ary = [9,-2, 3, 16, 8, -20, 150, 60, 80, 6, 1, 18, 20];
var len = ary.length -3,
    idx1 = 0,
    idx2 = 0,
    minVal = 0,
    maxVal = 0,
    sumVal = 0;

minVal = ary[0] + ary [1] + ary[2];
//console.log(minVal);

maxVal = minVal;
//console.log(maxVal);


for(var i = 0; i <= len; i++) {
   sumVal = ary[i] + ary [i+1] + ary[i+2]
   if (sumVal > maxVal) {
     maxVal = sumVal;
     idx1 = i;
   }
   if (sumVal < minVal) {
     minVal = sumVal;
     idx2 = i;
   }

   console.log(sumVal)
   console.log(minVal);
   console.log(maxVal);

}

console.log('MinVal :' + minVal)
console.log('MinId :' + idx2)
console.log('MaxVal :' + maxVal)
console.log('MaxId :' + idx1)
