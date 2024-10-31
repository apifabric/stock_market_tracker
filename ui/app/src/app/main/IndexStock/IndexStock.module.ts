import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INDEXSTOCK_MODULE_DECLARATIONS, IndexStockRoutingModule} from  './IndexStock-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    IndexStockRoutingModule
  ],
  declarations: INDEXSTOCK_MODULE_DECLARATIONS,
  exports: INDEXSTOCK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexStockModule { }