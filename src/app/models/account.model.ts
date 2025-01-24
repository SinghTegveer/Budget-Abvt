class Account {
    id: number;
    type: number;
    description: string;
    balance: number;
    availableCredit: number;
    statementDueDate: Date;
    creditLimit: number;
    bank: string;
    rateOfReturn: number;
    additionalComments: string;

    constructor(object: any) {
        this.id = object.id ? object.id : null;
        this.type = object.type ? object.type : null;
        this.description = object.description ? object.description : null;
        this.balance = object.balance ? object.balance : null;
        this.availableCredit = object.availableCredit ? object.availableCredit : null;
        this.statementDueDate = object.statementDueDate ? object.statementDueDate : null;
        this.creditLimit = object.creditLimit ? object.creditLimit : null;
        this.bank = object.bank ? object.bank : null;
        this.rateOfReturn = object.rateOfReturn ? object.rateOfReturn : null;
        this.additionalComments = object.additionalComments ? object.additionalComments : null;
    }

    get_id() {
        return this.id;
    }
    set_id(id: number) {
        this.id = id;
    }
    get_type() {
        return this.type;
    }
    set_type(type: number) {
        this.type = type;
    }
    get_description() {
        return this.description;
    }
    set_description(description: string) {
        this.description = description;
    }
    get_balance() {
        return this.balance;
    }
    set_balance(balance: number) {
        this.balance = balance;
    }
    get_availableCredit() {
        return this.availableCredit;
    }
    set_availableCredit(availableCredit: number) {
        this.availableCredit = availableCredit;
    }
    get_statementDueDate() {
        return this.statementDueDate;
    }
    set_statementDueDate(statementDueDate: Date) {
        this.statementDueDate = statementDueDate;
    }
    get_creditLimit() {
        return this.creditLimit;
    }
    set_creditLimit(creditLimit: number) {
        this.creditLimit = creditLimit;
    }
    get_bank() {
        return this.bank;
    }
    set_bank(bank: string) {
        this.bank = bank;
    }
    get_rateOfReturn() {
        return this.rateOfReturn;
    }
    set_rateOfReturn(rateOfReturn: number) {
        this.rateOfReturn = rateOfReturn;
    }
    get_additionalComments() {
        return this.additionalComments;
    }
    set_additionalComments(additionalComments: string) {
        this.additionalComments = additionalComments;
    }
}