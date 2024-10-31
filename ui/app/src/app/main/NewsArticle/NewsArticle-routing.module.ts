import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsArticleHomeComponent } from './home/NewsArticle-home.component';
import { NewsArticleNewComponent } from './new/NewsArticle-new.component';
import { NewsArticleDetailComponent } from './detail/NewsArticle-detail.component';

const routes: Routes = [
  {path: '', component: NewsArticleHomeComponent},
  { path: 'new', component: NewsArticleNewComponent },
  { path: ':id', component: NewsArticleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'NewsArticle-detail-permissions'
      }
    }
  }
];

export const NEWSARTICLE_MODULE_DECLARATIONS = [
    NewsArticleHomeComponent,
    NewsArticleNewComponent,
    NewsArticleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsArticleRoutingModule { }