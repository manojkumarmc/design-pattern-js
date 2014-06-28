var CoffeeDay = (function() {
    
    function _base() {
        this.val = function() {
            return 50;
        }
    }

    function _prepareBase() {
        var _coffeeObj = new _base();
        return _coffeeObj;
    }

    function _makeBill(cf) {
        console.log(cf.val())
    }

    function _makeExpresso(cf) {
        var baseVal = cf.val()
        cf.val = function() {
            return baseVal + 50
        }
    }

    function _makeCappucino(cf) {
        var baseVal = cf.val()
        cf.val = function() {
            return baseVal + 75
        }
    }

    function _addMilk(cf) {
        var baseVal = cf.val()
        cf.val = function() {
            return baseVal + 25
        }
    }

    function _addVanilla(cf) {
        var baseVal = cf.val()    
        cf.val = function() {
            return baseVal + 35
        }
    }

    return {
        prepare : _prepareBase,
        bill : _makeBill,
        expresso : _makeExpresso,
        cappuccino : _makeCappucino,
        milk : _addMilk,
        vanilla : _addVanilla
                
    }

})();

var coffee = CoffeeDay.prepare();

CoffeeDay.expresso(coffee)
CoffeeDay.milk(coffee)
CoffeeDay.vanilla(coffee)

CoffeeDay.bill(coffee)
