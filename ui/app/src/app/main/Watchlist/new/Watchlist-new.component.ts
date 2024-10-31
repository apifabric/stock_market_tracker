import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Watchlist-new',
  templateUrl: './Watchlist-new.component.html',
  styleUrls: ['./Watchlist-new.component.scss']
})
export class WatchlistNewComponent {
  @ViewChild("WatchlistForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}