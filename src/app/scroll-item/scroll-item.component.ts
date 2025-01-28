import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-scroll-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-item.component.html',
  styleUrl: './scroll-item.component.css',
  animations: [
    trigger('slideDown', [
      state('A',
        style({
          backgroundColor: 'yellow'
        })
      ),
      state(
        'B',
        style({
          backgroundColor: 'blue'
        })
      ),
      transition('A <=> B', [animate('5000ms')]),
    ]),
  ],
})
export class ScrollItemComponent {
  @Input() scrollItemTitle: any;
  scrollItemExpand: Boolean = false;

  updateScrollItemExpand() {
    this.scrollItemExpand = !this.scrollItemExpand;
  }
}
