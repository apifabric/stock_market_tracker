import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'IndexStock-new',
  templateUrl: './IndexStock-new.component.html',
  styleUrls: ['./IndexStock-new.component.scss']
})
export class IndexStockNewComponent {
  @ViewChild("IndexStockForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}