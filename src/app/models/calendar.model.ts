export class Calendar {
    calendarDates: Array<CalendarItem>;
    userId: number;

    constructor(object: any) {
        this.calendarDates = object.calendarDates ? object.calendarDates : null;
        this.userId = object.userId ? object.userId : null;
    }
    get_calendarDates() {
        return this.calendarDates;
    }
    set_calendarDates(calendarDates: any) {
        this.calendarDates = calendarDates;
    }
    get_userId() {
        return this.userId;
    }
    set_userId(userId: number) {
        this.userId = userId;
    }
}

export class CalendarItem {
    calendarDate: Date;
    displayBalance: number;

    constructor(object: any) {
        this.calendarDate = object.calendarDate ? object.calendarDate : null;
        this.displayBalance = object.displayBalance ? object.displayBalance : null;
    }

    get_calendarDate() {
        return this.calendarDate;
    }
    set_calendarDate(calendarDate: Date) {
        this.calendarDate = calendarDate;
    }
    get_displayBalance() {
        return this.displayBalance;
    }
    set_displayBalance(displayBalance: number) {
        this.displayBalance = displayBalance;
    }
}