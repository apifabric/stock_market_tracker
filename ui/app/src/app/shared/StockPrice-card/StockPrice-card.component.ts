import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StockPrice-card.component.html',
  styleUrls: ['./StockPrice-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StockPrice-card]': 'true'
  }
})

export class StockPriceCardComponent {


}