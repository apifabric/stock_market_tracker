import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Transaction-card.component.html',
  styleUrls: ['./Transaction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Transaction-card]': 'true'
  }
})

export class TransactionCardComponent {


}