import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STOCKPRICE_MODULE_DECLARATIONS, StockPriceRoutingModule} from  './StockPrice-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StockPriceRoutingModule
  ],
  declarations: STOCKPRICE_MODULE_DECLARATIONS,
  exports: STOCKPRICE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StockPriceModule { }