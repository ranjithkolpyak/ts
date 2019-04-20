type BankAccount = {
    money: number,
    deposit: (amt: number) => void
};

type Self = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
}

let bankAccount: BankAccount = {
    money: 5000,
    deposit(value: number) {
        this.money += value;
        return 0;
    }
};

let myself: Self = {
    name: 'Ranjith',
    bankAccount: bankAccount,
    hobbies: ['Reading', 'Hiking', 'Kayaking']
};

myself.bankAccount.deposit(5000);
console.log(myself);