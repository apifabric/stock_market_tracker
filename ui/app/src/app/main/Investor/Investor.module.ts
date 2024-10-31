import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INVESTOR_MODULE_DECLARATIONS, InvestorRoutingModule} from  './Investor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InvestorRoutingModule
  ],
  declarations: INVESTOR_MODULE_DECLARATIONS,
  exports: INVESTOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvestorModule { }