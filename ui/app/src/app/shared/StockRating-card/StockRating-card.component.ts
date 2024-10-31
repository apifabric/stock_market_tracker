import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './StockRating-card.component.html',
  styleUrls: ['./StockRating-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.StockRating-card]': 'true'
  }
})

export class StockRatingCardComponent {


}