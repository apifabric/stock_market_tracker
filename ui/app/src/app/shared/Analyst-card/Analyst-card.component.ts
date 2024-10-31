import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Analyst-card.component.html',
  styleUrls: ['./Analyst-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Analyst-card]': 'true'
  }
})

export class AnalystCardComponent {


}