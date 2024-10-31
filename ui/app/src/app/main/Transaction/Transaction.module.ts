import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRANSACTION_MODULE_DECLARATIONS, TransactionRoutingModule} from  './Transaction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TransactionRoutingModule
  ],
  declarations: TRANSACTION_MODULE_DECLARATIONS,
  exports: TRANSACTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransactionModule { }