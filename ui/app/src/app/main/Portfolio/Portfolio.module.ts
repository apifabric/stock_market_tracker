import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PORTFOLIO_MODULE_DECLARATIONS, PortfolioRoutingModule} from  './Portfolio-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PortfolioRoutingModule
  ],
  declarations: PORTFOLIO_MODULE_DECLARATIONS,
  exports: PORTFOLIO_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioModule { }