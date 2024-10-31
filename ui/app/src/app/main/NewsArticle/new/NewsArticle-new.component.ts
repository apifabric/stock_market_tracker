import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'NewsArticle-new',
  templateUrl: './NewsArticle-new.component.html',
  styleUrls: ['./NewsArticle-new.component.scss']
})
export class NewsArticleNewComponent {
  @ViewChild("NewsArticleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}