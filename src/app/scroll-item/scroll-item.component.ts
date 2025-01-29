import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { TransactionDetailComponent } from '../transaction-detail/transaction-detail.component';

@Component({
  selector: 'app-scroll-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-item.component.html',
  styleUrl: './scroll-item.component.css',
  animations: [
    trigger('slideDown', [
      state('A', style({
          height: 0,
          opacity: 0,
          padding: 0,
        })
      ),
      state('B', style({
          height: "*",
          opacity: 1,
          padding: '3%',
          borderBottom: 'solid 1pt grey'
        })
      ),
      transition('A <=> B', [animate('500ms')]),
    ]),
  ],
})
export class ScrollItemComponent {
  @Input() scrollItemTitle: any;
  displayComponent: any;
  @Input() scrollItemExpand: any;

  ngOnInit() {
    if (this.scrollItemTitle === 'Accounts') {
      this.displayComponent = AccountsComponent;
    } else if (this.scrollItemTitle === 'Transactions') {
      this.displayComponent = TransactionDetailComponent;
    } else if (this.scrollItemTitle == 'Budgetting Calendar') {
      this.displayComponent = CalendarComponent;
    }
  }

  updateScrollItemExpand() {
    this.scrollItemExpand = !this.scrollItemExpand;
  }
}
