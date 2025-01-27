import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-item',
  standalone: true,
  imports: [],
  templateUrl: './calendar-item.component.html',
  styleUrl: './calendar-item.component.css',
})
export class CalendarItemComponent {
  @Input() calendarItem: any;
  dateClicked: boolean = false;
  ngOnInit() {
    console.log('Calendar Item: ', this.calendarItem);
  }

  displayTransactionData() {
    console.log('Method to display Pop up called');
    this.dateClicked = true;
  }
}
