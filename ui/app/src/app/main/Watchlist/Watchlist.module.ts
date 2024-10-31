import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WATCHLIST_MODULE_DECLARATIONS, WatchlistRoutingModule} from  './Watchlist-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WatchlistRoutingModule
  ],
  declarations: WATCHLIST_MODULE_DECLARATIONS,
  exports: WATCHLIST_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WatchlistModule { }