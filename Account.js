// Export your class here as module.exports = MyClass
module.exports = Account;

function Account(name, balance, creditLimit) {
    this.name = name;
    this.balance = balance;
    this.creditLimit = creditLimit;

    this.makeDeposit = function makeDeposit(deposit) {
        if (deposit <= 0) {
            return this.balance
        }
        this.balance = this.balance + deposit;

    }

    this.makeWithdrawal = function makeWithdrawal(withdrawal) {
        if (withdrawal > this.balance + this.creditLimit) {
            return this.balance
        }
        else if (withdrawal > 5000) {
            return this.balance;
        }
        this.balance = this.balance - withdrawal;
    }
}