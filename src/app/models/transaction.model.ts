class Transaction {
  id: number;
  account: number;
  description: string;
  category: number;
  amount: number;
  transactionDate: Date;
  additionalComments: string;
  isAdded: boolean;
  isRealized: boolean;
  frequency: number;

  constructor(object: any) {
    this.id = object.id ? object.id : null;
    this.account = object.account ? object.account : null;
    this.description = object.description ? object.description : null;
    this.category = object.category ? object.category : null;
    this.amount = object.amount ? object.amount : null;
    this.transactionDate = object.transactionDate
      ? object.transactionDate
      : null;
    this.additionalComments = object.additionalComments
      ? object.additionalComments
      : null;
    this.isAdded = object.isAdded ? object.isAdded : null;
    this.isRealized = object.isRealized ? object.isRealized : null;
    this.frequency = object.frequency ? object.frequency : null;
  }

  get_id() {
    return this.id;
  }
  set_id(id: number) {
    this.id = id;
  }
  get_account() {
    return this.account;
  }
  set_account(account: number) {
    this.account = account;
  }
  get_description() {
    return this.description;
  }
  set_description(description: string) {
    this.description = description;
  }
  get_category() {
    return this.category;
  }
  set_category(category: number) {
    this.category = category;
  }
  get_amount() {
    return this.amount;
  }
  set_amount(amount: number) {
    this.amount = amount;
  }
  get_transationDate() {
    return this.transactionDate;
  }
  set_transationDate(transactionDate: Date) {
    this.transactionDate = transactionDate;
  }
  get_additionalComments() {
    return this.additionalComments;
  }
  set_additionalComments(additionalComments: string) {
    this.additionalComments = additionalComments;
  }
  get_isAdded() {
    return this.isAdded;
  }
  set_isAdded(isAdded: boolean) {
    this.isAdded = isAdded;
  }
  get_isRealized() {
    return this.isRealized;
  }
  set_isRealized(isRealized: boolean) {
    this.isRealized = isRealized;
  }
  get_frequency() {
    return this.frequency;
  }
  set_frequency(frequency: number) {
    this.frequency = frequency;
  }
}
