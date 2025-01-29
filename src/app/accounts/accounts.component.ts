import { Component } from '@angular/core';
import { GeneralTableComponent } from '../general-table/general-table.component';
import { Account } from '../models/account.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [GeneralTableComponent, CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent {

  headers: Array<string> = new Array();
  widths: Array<number> = new Array();
  formats: Array<any> = new Array();
  displayData: Array<any> = new Array();
  accountsList: Array<Account> = new Array();

  ngOnInit() {
    this.headers = ["Type", "Description", "Balance", "Available Credit", "Statement Due Date", "Credit Limit", "Bank", "RoR", "Additional Comments"]
    this.widths = [10, 22, 9, 9, 10, 8, 6, 6, 20];
    this.formats = ["String", "String", "Number", "Number", "Date", "Number", "String", "Number", "String"];
    let account1 = {
      id: 1,
      userId: 2,
      type: "Investment - TFSA",
      description: "Personal Investment Account",
      balance: 13500,
      availableCredit: null,
      statementDueDate: null,
      creditLimit: null,
      bank: "ABC",
      rateOfReturn: 12,
      additionalComments: "Predicting Return"
    }
    let account2 = {
      id: 2,
      userId: 2,
      type: "Savings",
      description: "Personal Savings Accounts",
      balance: 10000,
      availableCredit: null,
      statementDueDate: null,
      creditLimit: null,
      bank: "XYZ",
      rateOfReturn: 1.25,
      additionalComments: "Predicting Return",
    };
    let account3 = {
      id: 3,
      userId: 2,
      type: "Credit Card",
      description: "Credit Card ABC",
      balance: 2300,
      availableCredit: 10000,
      statementDueDate: new Date(2025, 6, 1),
      creditLimit: null,
      bank: "PQR",
      rateOfReturn: null,
      additionalComments: "NA",
    };
    this.displayData = [
      [
        account1.type,
        account1.description,
        account1.balance,
        account1.availableCredit,
        account1.statementDueDate,
        account1.creditLimit,
        account1.bank,
        account1.rateOfReturn,
        account1.additionalComments,
      ],
      [
        account2.type,
        account2.description,
        account2.balance,
        account2.availableCredit,
        account2.statementDueDate,
        account2.creditLimit,
        account2.bank,
        account2.rateOfReturn,
        account2.additionalComments,
      ],
      [
        account3.type,
        account3.description,
        account3.balance,
        account3.availableCredit,
        account3.statementDueDate,
        account3.creditLimit,
        account3.bank,
        account3.rateOfReturn,
        account3.additionalComments,
      ],
    ];
    this.accountsList = [new Account(account1), new Account(account2), new Account(account3)];
  }
}
