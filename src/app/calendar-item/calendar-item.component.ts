import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-item.component.html',
  styleUrl: './calendar-item.component.css',
})
export class CalendarItemComponent {
  hoverFlag: boolean = false;
  @Input('calendarDate') calendarDate: any;
  @Input('calendarBalance') calendarBalance: any;

  setHoverFlagTrue() {
    this.hoverFlag = true;
  }

  setHoverFlagFalse() {
    this.hoverFlag = false;
  }

  getGridTemplateColumns() {
    if (this.hoverFlag) {
      return '80% 20%';
    } else {
      return '20% 60% 20%';
    }
  }

  getDetailEvent() {
    console.log("Get Detail Event called");
  }

  addEvent() {
    console.log("Add Event called");
    
  }
}
