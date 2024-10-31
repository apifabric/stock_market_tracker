import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Portfolio-card.component.html',
  styleUrls: ['./Portfolio-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Portfolio-card]': 'true'
  }
})

export class PortfolioCardComponent {


}