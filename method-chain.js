var ChainObject = {
    first : function() {
	setTimeout(function() {
  	  console.log('first')	    
	}, 2000)
	return this
    },
    second : function() {
	console.log('second')
	return this
    },
    third : function() {
	console.log('third')
	return this
    }
}

ChainObject.first()
           .second()
           .third()
