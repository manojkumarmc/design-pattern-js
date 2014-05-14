function LinkedListNode() {
    this.data = null;
    this.nextNode = null;
}

function LinkedList() {
    this.firstNode = null;
    this.lastNode = null;
    this.length = 0;
}

LinkedList.prototype.addNode = function(data) {

    var newNode = new LinkedListNode();
    newNode.data = data;
    
    if (this.firstNode === null) {
        this.firstNode = newNode
        this.lastNode = newNode
    } else {
	this.lastNode.nextNode = newNode
	this.lastNode = newNode
    }

    this.length++
}

LinkedList.prototype.indexOf = function(data) {

    var currentNode = this.firstNode;
    var pos = 0;
    var found = false;

    for (;;pos++) {

	if (currentNode === null) {
	    break
	}

	if (currentNode.data === data) {
	    found = true
	    break
	}

	currentNode = currentNode.nextNode
	
    }

    if (!found) {
	pos = -1
    }

    return pos
}

LinkedList.prototype.list = function() {
    var pos = 0;
    var currentNode = this.firstNode;

    for(; ; pos++) {
	if (currentNode === null) {
	    break
	}
	console.log(currentNode)
	currentNode = currentNode.nextNode
    }
}

var ll = new LinkedList()
for (var i = 0; i < 10; i++) {
    ll.addNode(i)   
}

ll.list()
console.log(ll.indexOf(3))

