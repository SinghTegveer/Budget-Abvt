import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarItemComponent } from '../calendar-item/calendar-item.component';
import { Calendar, CalendarItem } from '../models/calendar.model';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, CalendarItemComponent],
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
  // To be used for smaller screens
  days_shortened_strings = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  calendar: any;

  ngOnInit() {
    this.refreshDate(
      this.selected_date.getMonth(),
      this.selected_date.getFullYear()
    );
    this.createSampleCalendarObject();
    this.selected_month = this.selected_date.getMonth();
  }

  createSampleCalendarObject() {
    this.calendar = {
      userId: 1234, 
      calendarDates: [
        {
          calendarDate: new Date(2024, 11, 29),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2024, 11, 30),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2024, 11, 31),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 1),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 2),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 3),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 4),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 5),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 6),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 7),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 8),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 9),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 10),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 11),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 12),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 13),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 14),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 15),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 16),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 17),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 18),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 19),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 20),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 21),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 22),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 23),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 24),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 25),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 26),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 27),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 28),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 29),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 30),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 0, 31),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 1, 1),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 1, 2),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 1, 3),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 1, 4),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 1, 5),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 1, 6),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 1, 7),
          displayBalance: 675.09,
        },
        {
          calendarDate: new Date(2025, 1, 8),
          displayBalance: 675.09,
        }
      ], 
    };

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

  getCalendarItem(i: number, j: number) { 
    let result = this.calendar.calendarDates[i * 7 + j];
    return result;
  }
}
