function Bank() {
    this.amt = 0
}

var fn = Bank.prototype;

fn.deposit = function(dep) {
    this.amt = this.amt + dep
    console.log('Deposited: ' + this.amt)
    return this
}

fn.withdraw = function(wd) {
  this.amt = this.amt - wd;
  console.log('Withdrew: ' + this.amt)
  return this
}

new Bank().deposit(100).withdraw(50)
