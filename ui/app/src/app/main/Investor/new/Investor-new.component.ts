import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Investor-new',
  templateUrl: './Investor-new.component.html',
  styleUrls: ['./Investor-new.component.scss']
})
export class InvestorNewComponent {
  @ViewChild("InvestorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}