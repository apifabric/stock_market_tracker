import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StockRating-new',
  templateUrl: './StockRating-new.component.html',
  styleUrls: ['./StockRating-new.component.scss']
})
export class StockRatingNewComponent {
  @ViewChild("StockRatingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}