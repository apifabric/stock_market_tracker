import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Dividend-new',
  templateUrl: './Dividend-new.component.html',
  styleUrls: ['./Dividend-new.component.scss']
})
export class DividendNewComponent {
  @ViewChild("DividendForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}