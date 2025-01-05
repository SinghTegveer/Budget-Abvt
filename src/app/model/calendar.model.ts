import { CalendarDetailItem } from './calendar-detail-item.model';

export class Calendar {
  row: number;
  column: number;
  calendarItems: Array<CalendarDetailItem>;
  // Date around which the entire calendar display will be set
  primaryDate: Date;

  constructor(object: any) {
    this.row = object.row ? object.row : 6;
    this.column = object.column ? object.column : 6;
    this.calendarItems = object.calendarItems ? object.calendarItems : null;
    this.primaryDate = object.primaryDate ? object.primaryDate : new Date();
  }
}
