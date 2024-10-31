import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {STOCKRATING_MODULE_DECLARATIONS, StockRatingRoutingModule} from  './StockRating-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    StockRatingRoutingModule
  ],
  declarations: STOCKRATING_MODULE_DECLARATIONS,
  exports: STOCKRATING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StockRatingModule { }