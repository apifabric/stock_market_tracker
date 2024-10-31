import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MarketIndex-new',
  templateUrl: './MarketIndex-new.component.html',
  styleUrls: ['./MarketIndex-new.component.scss']
})
export class MarketIndexNewComponent {
  @ViewChild("MarketIndexForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}