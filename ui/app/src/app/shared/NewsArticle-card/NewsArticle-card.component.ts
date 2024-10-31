import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './NewsArticle-card.component.html',
  styleUrls: ['./NewsArticle-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.NewsArticle-card]': 'true'
  }
})

export class NewsArticleCardComponent {


}