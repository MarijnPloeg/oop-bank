// Export your class here as module.exports = MyClass
const Account = require("./Account");

class BusinessAccount extends Account {
    constructor(name, balance, creditLimit, sepaPermission) {
        super(name, balance, creditLimit);
        this.sepaPermission = sepaPermission;

        this.makeWithdrawal = function makeWithdrawal(withdrawal) {
            if (withdrawal > this.balance + this.creditLimit) {
                return this.balance
            }
            else if (withdrawal > 20000) {
                return this.balance;
            }
            this.balance = this.balance - withdrawal;
        }

        this.sepaInvoice = function sepaInvoice(invoiceAmount) {
            if (invoiceAmount >= 0 && sepaPermission === true) {
                const transactionCost = invoiceAmount / 100;
                this.balance = (balance + invoiceAmount) - transactionCost;
            } else {
                return this.balance;
            }
        }
    }
}

module.exports = BusinessAccount;
