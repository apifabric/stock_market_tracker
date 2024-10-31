import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {NEWSARTICLE_MODULE_DECLARATIONS, NewsArticleRoutingModule} from  './NewsArticle-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    NewsArticleRoutingModule
  ],
  declarations: NEWSARTICLE_MODULE_DECLARATIONS,
  exports: NEWSARTICLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsArticleModule { }