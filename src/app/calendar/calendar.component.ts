import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  calendar_dates_lists: any = [];
  selected_date: Date = new Date();
  selected_month: number = 0;
  selected_year: number = 0;
  month_strings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days_strings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  ngOnInit() {
    this.refreshDate(
      this.selected_date.getMonth(),
      this.selected_date.getFullYear()
    );

    this.selected_month = this.selected_date.getMonth();
  }

  // Get a list of calendar dates given the month and year
  refreshDate(month: number, year: number) {
    
    // Get first date to be displayed in the calendar
    let temp_date = new Date(year, month, 1);

    while (temp_date.getDay() !== 0) {
      temp_date.setDate(temp_date.getDate() - 1);
    }

    let current_week = [];
      
    // Add 6 weeks starting at the given date;
    for (let i = 0; i < 42; i++) {
      current_week.push(new Date(temp_date));
      if (i % 7 === 6) {
        this.calendar_dates_lists.push(current_week);
        current_week = [];
      }
      temp_date.setDate(temp_date.getDate() + 1);
    }

    console.log("Calendar Dates Lists: ", this.calendar_dates_lists);
  }

}
