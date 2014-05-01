var BankModule = function() {

    var customers = [],
        custId = 1

    function _nextId() {
	return custId++
    }

    function _createAccount(name) {
	customers.push(
	    {
		custId : _nextId(),
		name : name,
		balance : 0
	    }
	)
    }

    function _deposit(custId, amount) {
	for (var i = 0; i < customers.length; i++) {
	    if (customers[i].custId === custId) {
		customers[i].balance =  customers[i].balance + amount
	    }
	}
    }

    function _withdraw(custId, amount) {
	for (var i = 0; i < customers.length; i++) {
	    if (customers[i].custId === custId) {
		customers[i].balance = customers[i].balance - amount
	    }
	}
    }

    function _showAll() {
	for (var i = 0; i < customers.length; i++) {
	    console.log(customers[i])
	}
    }

    return {
	newAccount : _createAccount,
	deposit : _deposit,
	withdraw : _withdraw,
	showAll : _showAll
    }

}();

BankModule.newAccount('Manoj Kumar MC')
BankModule.newAccount('Cisco')
BankModule.showAll()


