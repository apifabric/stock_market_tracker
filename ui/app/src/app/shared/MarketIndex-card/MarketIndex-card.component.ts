import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MarketIndex-card.component.html',
  styleUrls: ['./MarketIndex-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MarketIndex-card]': 'true'
  }
})

export class MarketIndexCardComponent {


}