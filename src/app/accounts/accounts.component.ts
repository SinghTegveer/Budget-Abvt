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
  updatesAllowed: Array<boolean> = new Array();
  dropdowns: Array<any> = new Array();

  ngOnInit() {
    this.headers = ["Type", "Description", "Balance", "Available Credit", "Statement Due Date", "Credit Limit", "Bank", "RoR", "Additional Comments", "Action"]
    this.widths = [10, 22, 9, 9, 8, 8, 5, 5, 14, 10];
    this.formats = ["String", "String", "Number", "Number", "Date", "Number", "String", "Number", "String", "Action"];
    this.updatesAllowed = [false, true, false, false, true, true, true, true, true, true];
    let accountsType = [
      'Investment - TFSA: Wealthsimple',
      'Credit Card: BankA',
    ];
    this.dropdowns = [accountsType, null, null, null, null, null, null, null, null, null]
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
      availableCredit: 9700,
      statementDueDate: new Date(2025, 6, 1),
      creditLimit: 12000,
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
        null
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
        null
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
        null
      ],
    ];
    this.accountsList = [new Account(account1), new Account(account2), new Account(account3)];
  }
}
