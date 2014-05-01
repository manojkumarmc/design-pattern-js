/*
EvalError (errors produced from an eval();
RangeError (produced when using a number that is out of the range for where it is being used)
ReferenceError (produced when trying to access a non-existent member of an object by name);
SyntaxError;
TypeError (when a method was expecting a value of a different type);
URxIError (produced when trying to create or decode a URI).
*/

(function ExceptionHandler() {
    try {
//	var er = eval('console.log("hello world)') // SyntaxError

//	var x = y // undefined

//	var er = 101
//	if (er > 100) {throw new RangeError('There is a range error')}

//      if (true) {throw new EvalError('There is an eval error')}


	
    } catch (error) {
	switch(error.name) {
	    case 'EvalError' :
	      console.log('EvalError raised')
	      // do furthur error handling
	      break
	    case 'RangeError' :
	      console.log('RangeError raised')
	      // do furthur error handling
	      break
	    case 'ReferenceError' :
	      console.log('ReferenceError raised')
	      // do furthur error handling
	      break
	    case 'SyntaxError' :
	      console.log('SyntaxError raised')
	      // do furthur error handling
	      break
	    case 'TypeError' :
	      console.log('TypeError raised')
	      // do furthur error handling
	      break
	    case 'URIError' :
	      console.log('URIError raised')
	      // do furthur error handling
	      break
	}
    }
})();


