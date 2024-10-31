import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MARKETINDEX_MODULE_DECLARATIONS, MarketIndexRoutingModule} from  './MarketIndex-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MarketIndexRoutingModule
  ],
  declarations: MARKETINDEX_MODULE_DECLARATIONS,
  exports: MARKETINDEX_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarketIndexModule { }