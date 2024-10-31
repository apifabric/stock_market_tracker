import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Dividend-card.component.html',
  styleUrls: ['./Dividend-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Dividend-card]': 'true'
  }
})

export class DividendCardComponent {


}