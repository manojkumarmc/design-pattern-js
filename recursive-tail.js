/*
  Author : Manoj Kumar MC
  Desc   : Sample program to show the concept of tail v normal recursion.
*/

var factorialObj = {
    0 : function normalFactorial(n) {
	return (n === 0 ? 1 : n * normalFactorial(n-1))
    },
    1 : function tailFactorial(n) {
	    function recur(n, acc) {
		return ((n == 0) ? acc : recur(n-1, n*acc))
	    }
	return recur(n, 1);
    }
}

console.log(factorialObj[process.argv[2]](parseInt(process.argv[3])))


