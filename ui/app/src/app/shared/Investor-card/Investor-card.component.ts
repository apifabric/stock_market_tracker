import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Investor-card.component.html',
  styleUrls: ['./Investor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Investor-card]': 'true'
  }
})

export class InvestorCardComponent {


}