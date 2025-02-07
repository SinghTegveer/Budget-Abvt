import { Component } from '@angular/core';
import { GeneralTableComponent } from '../general-table/general-table.component';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [GeneralTableComponent],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css'
})
export class TransactionDetailComponent {
  headers: Array<string> = new Array();
  widths: Array<number> = new Array();
  formats: Array<any> = new Array();
  displayData: Array<any> = new Array();
  dropdowns: Array<any> = new Array();
  updatesAllowed: Array<boolean> = new Array();

  ngOnInit() {
    this.headers = ["Description", "Account Type", "Transaction Category", "Amount", "Date", "Additional Comments", "Added", "Realized", "Frequency", "Action"];
    this.widths = [17, 14, 14, 8, 8, 11, 5, 5, 8, 10];
    this.formats = ["String", "String", "String", "Number", "Date", "String", "Boolean", "Boolean", "String", "Action"];
    // Returned by the API as the accounts user has
    let accountsType = ["Investment - TFSA: Wealthsimple", "Credit Card: BankA"];
    let transactionsType = ["Income - Pay", "Income - Other", "Investment - A", "Investment - B", "Investment - C", "Savings", "Essential", "Periodic Payments", "Non-essential"];
    let frequencyDropdown = ["Once", "Weekly", "Biweekly", "Monthly"];
    let booleanDropdown = ["Yes", "No"]
    this.dropdowns = [null, accountsType, transactionsType, null, null, null, booleanDropdown, booleanDropdown, frequencyDropdown, null];
    this.updatesAllowed = [true, false, true, true, true, true, true, true, true, true];
    this.displayData = [
      [
        'Walmart Groceries',
        'Credit Card',
        'Essential',
        173.99,
        new Date(2025, 2, 2),
        'Regular Groceries',
        false,
        true,
        'Once',
        null,
      ],
      [
        'Car Gas',
        'Credit Card',
        'Essential',
        63.99,
        new Date(2025, 2, 5),
        'Regular Gas Payment',
        false,
        true,
        'Once',
        null,
      ],
      [
        'Investment',
        'Investment - TFSA',
        'Investment - TFSA',
        2000.00,
        new Date(2025, 2, 7),
        '',
        true,
        true,
        'Once',
        null,
      ],
    ];
  }
}
