import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ScrollItemComponent } from './scroll-item/scroll-item.component';
import { AccountsComponent } from './accounts/accounts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent, ScrollItemComponent, AccountsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'budget-buddy';
  accountsScrollTitle: string = 'Accounts';
  transactionsScrollTitle: string = 'Transactions';
  budgetCalendarScrollTitle: string = 'Budgetting Calendar';
}
