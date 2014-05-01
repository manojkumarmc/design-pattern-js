function Person(name) {
    this.name = name
}

Person.prototype.getName = function() {
    console.log(this.name)
}

var manoj = new Person('Manoj')
var mayuresh = new Person('Mayuresh')

manoj.getName()
mayuresh.getName()
