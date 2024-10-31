import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './IndexStock-card.component.html',
  styleUrls: ['./IndexStock-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.IndexStock-card]': 'true'
  }
})

export class IndexStockCardComponent {


}