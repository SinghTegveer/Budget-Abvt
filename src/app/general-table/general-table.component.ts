import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DefaultPipe } from '../pipes/default.pipe';

@Component({
  selector: 'app-general-table',
  standalone: true,
  imports: [CommonModule, DefaultPipe],
  templateUrl: './general-table.component.html',
  styleUrl: './general-table.component.css',
})
export class GeneralTableComponent {
  @Input() headers: Array<string> = new Array(); // List of Column Headers
  @Input() widths: Array<number> = new Array(); // List of Column Widths - Total 100
  @Input() formats: Array<string> = new Array(); // List of Column Formats
  @Input() displayData: Array<any> = new Array(); // Data to display in the table rows
  @Input() addApiUrl: string = ''; // URL for Add API
  @Input() deleteApiUrl: string = ''; // URL for Delete API - If null add extra column
  @Input() updateApiUrl: string = ''; // URL for Put call
  @Input() scrollDataVertical: boolean = false; // Allow for table scrolls
  @Input() scrollDataHorizontal: boolean = false; // Allow for table scrolls
  @Input() updatesAllowed: Array<boolean> = new Array(); // For columns that are available for updates
  rowUpdate: Array<boolean> = new Array(); // For row updates and styling
  columnUpdate: Array<Array<boolean>> = new Array();
  
  ngOnInit() {
    console.log('General Table Component');
    this.rowUpdate = new Array(this.displayData.length).fill(false);
    for (let i = 0; i < this.displayData.length; i++) {
      this.columnUpdate.push(new Array(this.headers.length).fill(false))
    }
  }

  getGridTemplateColumns() {
    let updated_widths = this.widths.map((v) => `${v}%`);
    let result = updated_widths.join(' ');
    return result;
  }

  updatedSelected(i: number) {
    console.log('Update option for Inputs selected');
    this.rowUpdate[i] = true;
  }

  callUpdateApi(i: number) {
    console.log('Update API called');
    this.rowUpdate[i] = false;
  }

  // Method to change row background on edit button click
  getRowBackgroundColor(i: number) {
    console.log('Get Row Background Color called');
    return this.rowUpdate[i] ? '#f2f2f2': 'white';
  }

  // Method to call delete API for row
  deleteRow(i: number) {
    console.log("Delete Row method called0");
  }

  setTrueColumnDataFlag(i: number, j: number) {
    console.log("Column Update Indexes: ", i, j);
    if (this.rowUpdate[i]) {
      this.columnUpdate[i][j] = true;
    }
    console.log('Column Update: ', this.columnUpdate);
  }
}
