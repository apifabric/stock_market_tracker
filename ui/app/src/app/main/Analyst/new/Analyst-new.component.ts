import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Analyst-new',
  templateUrl: './Analyst-new.component.html',
  styleUrls: ['./Analyst-new.component.scss']
})
export class AnalystNewComponent {
  @ViewChild("AnalystForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}