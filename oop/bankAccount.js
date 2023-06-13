function BankAccount(balance) {
    let _balance = balance;

    this.getBalance = function () {
        return _balance;
    }

    this.deposit = function (amount) {
        _balance += amount;
    }

    this.withdraw = function (amount) {
        if(balance > amount) {
            _balance -= amount;
        } else {
            console.log("Insufficient funds!");
        }
    }
}

let myAccount = new BankAccount(21000);
myAccount.deposit(20000);
console.log(myAccount.getBalance());
myAccount.withdraw(10000);
console.log(myAccount.getBalance());