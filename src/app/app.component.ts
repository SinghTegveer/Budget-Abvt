import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { SummaryTableComponent } from './summary-table/summary-table.component';
import { STYLE_COLOURS } from './styles/styles';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent, CommonModule, SummaryTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'budget-abvt';
  titleColour: any;
  subtitleColour: any;
  titleContainerImage: any;
  calendarContainerColour: any;

  ngOnInit() {
    this.titleColour = {
      'color': STYLE_COLOURS.budget_buddy_title_colour
    }
    this.subtitleColour = {
      'color': STYLE_COLOURS.subtitle_colour
    }
    this.titleContainerImage = {
      'background-color': STYLE_COLOURS.title_section_background
    }
    this.calendarContainerColour = {
      'background-color': STYLE_COLOURS.calendar_section_background_color
    }
  }
}
