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
          padding: 0,
        })
      ),
      state('B', style({
          height: "*",
          padding: '3%',
          borderBottom: 'solid 1pt grey',
        })
      ),
      transition('A <=> B', [animate('1s linear')]),
    ]),
  ],
})
export class ScrollItemComponent {
  @Input() scrollItemTitle: any;
  displayComponent: any;
  @Input() scrollItemExpand: boolean = false;

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
    console.log("Scroll Item Button clicked");
    this.scrollItemExpand = !this.scrollItemExpand;
  }
}
