import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ANALYST_MODULE_DECLARATIONS, AnalystRoutingModule} from  './Analyst-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AnalystRoutingModule
  ],
  declarations: ANALYST_MODULE_DECLARATIONS,
  exports: ANALYST_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnalystModule { }