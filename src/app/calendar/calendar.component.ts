import { Component } from '@angular/core';
import { CalendarItemComponent } from '../calendar-item/calendar-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CalendarItemComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  testRows: any = [1, 1, 1, 1, 1, 1];
  testColumns: any = [1, 1, 1, 1, 1, 1, 1];
  testCalendarDateItems = [
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
  ];
  testCalendarBalanceItems = [
    [150, 23.44, 23.44, 80.88, 9821, 9823, 9564],
    [9192, 91.30, 9014, 8915, 8716, 7800, 1800],
    [19.54, 20.00, 21.00, 22.09, 23.22, 74.65, 25.98],
    [10.26, 100.27, 5428, 45.29, 930.0, 31.00, 1.09],
    [122, 543, 654, 8735, 687.9, 7654, 1098],
    [900.9, 710.0, 611, 912, 713.9, 814, 215.1],
  ];

  constructor() {}

  ngOnInit() {
    console.log('Calendar Component Ng On Init called');
  }

  getGridTemplateRows() {
    // Get percentage of each row
    let rowHeightPercentage = Math.floor(10000 / this.testRows.length) / 100;
    // Generate Grid template rows string
    let gtrString: string = Array(this.testRows.length)
      .fill(`${rowHeightPercentage}%`)
      .join(' ');
    return gtrString;
  }

  getGridTemplateColumns() {
    // Get percentage of each column
    let columnWidthPercentage =
      Math.floor(10000 / this.testColumns.length) / 100;
    // Generate grid template columns string
    let gtcString: string = Array(this.testColumns.length)
      .fill(`${columnWidthPercentage}%`)
      .join(' ');
    return gtcString;
  }
}
