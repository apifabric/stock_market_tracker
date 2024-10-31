import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'StockPrice-new',
  templateUrl: './StockPrice-new.component.html',
  styleUrls: ['./StockPrice-new.component.scss']
})
export class StockPriceNewComponent {
  @ViewChild("StockPriceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}