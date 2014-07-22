function Person(name) {
     this.name = name
}

Person.prototype.getName = function() {
   console.log(this.name)	
}

function Man(name) {
  this.name = name
}

Man.prototype = new Person()
Man.prototype.constructor = Man

var myself = new Man("Manoj")
myself.getName()
