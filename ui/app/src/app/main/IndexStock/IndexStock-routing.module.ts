import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexStockHomeComponent } from './home/IndexStock-home.component';
import { IndexStockNewComponent } from './new/IndexStock-new.component';
import { IndexStockDetailComponent } from './detail/IndexStock-detail.component';

const routes: Routes = [
  {path: '', component: IndexStockHomeComponent},
  { path: 'new', component: IndexStockNewComponent },
  { path: ':id', component: IndexStockDetailComponent,
    data: {
      oPermission: {
        permissionId: 'IndexStock-detail-permissions'
      }
    }
  }
];

export const INDEXSTOCK_MODULE_DECLARATIONS = [
    IndexStockHomeComponent,
    IndexStockNewComponent,
    IndexStockDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexStockRoutingModule { }