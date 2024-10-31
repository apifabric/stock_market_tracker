import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Watchlist-card.component.html',
  styleUrls: ['./Watchlist-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Watchlist-card]': 'true'
  }
})

export class WatchlistCardComponent {


}