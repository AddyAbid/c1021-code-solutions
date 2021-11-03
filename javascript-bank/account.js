/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(deposit);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(withdraw);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var depositAmount = 0;
    var withdrawAmount = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        depositAmount += this.transactions[i].amount;
      } else {
        withdrawAmount += this.transactions[i].amount;
      }
    }
    return depositAmount - withdrawAmount;
  }
};
