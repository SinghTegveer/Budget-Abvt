import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-table',
  standalone: true,
  imports: [CommonModule],
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

  ngOnInit() {
    console.log('General Table Component');
  }

  getGridTemplateColumns() {
    let updated_widths = this.widths.map((v) => `${v}%`);
    let result = updated_widths.join(' ');
    console.log('Grid Template Columns: ', result);
    return result;
  }
}
