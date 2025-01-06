import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { STYLE_COLOURS } from '../styles/styles';

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
  detailButtonStyles: any;
  detailButtonStylesHover: any;
  addButtonStyles: any;
  addButtonStylesHover: any;
  calendarDateStyles: any;
  calendarItemContainerStyles: any;
  calendarItemContainerStylesHover: any;

  ngOnInit() {
    this.detailButtonStyles = {
      color: STYLE_COLOURS.calendar_date_background_color,
      cursor: 'default'
    };

    this.detailButtonStylesHover = {
      color: STYLE_COLOURS.detail_icon_colour,
      cursor: 'pointer'
    };

    this.addButtonStyles = {
      color: STYLE_COLOURS.calendar_date_background_color,
      cursor: 'default'
    };

    this.addButtonStylesHover = {
      color: STYLE_COLOURS.add_icon_colour,
      cursor: 'pointer'
    };

    this.calendarDateStyles = {
      color: STYLE_COLOURS.calendar_date_colour,
    };

    this.calendarItemContainerStyles = {
      'grid-template-columns': this.getGridTemplateColumns(),
      'background-color': STYLE_COLOURS.calendar_date_background_color,
      'border-color': STYLE_COLOURS.calendar_border_colour,
    };

    this.calendarItemContainerStylesHover = {
      'grid-template-columns': this.getGridTemplateColumns(),
      'background-color': STYLE_COLOURS.calendar_date_background_color_hover,
      'border-color': STYLE_COLOURS.calendar_border_colour,
    };
  }

  setHoverFlagTrue() {
    this.hoverFlag = true;
  }

  setHoverFlagFalse() {
    this.hoverFlag = false;
  }

  getGridTemplateColumns() {
    return '80% 20%';
  }

  getDetailEvent() {
    console.log('Get Detail Event called');
  }

  addEvent() {
    console.log('Add Event called');
  }
}
