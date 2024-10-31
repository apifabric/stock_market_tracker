import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DIVIDEND_MODULE_DECLARATIONS, DividendRoutingModule} from  './Dividend-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DividendRoutingModule
  ],
  declarations: DIVIDEND_MODULE_DECLARATIONS,
  exports: DIVIDEND_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DividendModule { }