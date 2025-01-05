import { Account } from './account.model';

export class CalendarDetailItem {
  account: Account;
  displayDate: Date;

  constructor(object: any) {
    this.account = object.account ? object.account : null;
    this.displayDate = object.displayDate ? object.displayDate : new Date();
  }
}
