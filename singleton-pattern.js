var Singleton = function() {

    var instance

    function init() {
        
	var privateVar
	
	function privateMethod(pv) {
	    privateVar = pv
	    console.log(privateVar)
	}

	return {
	    pm : privateMethod
	}
	
    }

    return {
	getInstance : function() {
	    if (!instance) {
		instance = init().pm('This is private var')
	    }
	    return instance
	}

    }
}();

var s1 = Singleton.getInstance()
var s2 = Singleton.getInstance()


