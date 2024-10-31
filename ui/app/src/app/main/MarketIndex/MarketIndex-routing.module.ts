import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketIndexHomeComponent } from './home/MarketIndex-home.component';
import { MarketIndexNewComponent } from './new/MarketIndex-new.component';
import { MarketIndexDetailComponent } from './detail/MarketIndex-detail.component';

const routes: Routes = [
  {path: '', component: MarketIndexHomeComponent},
  { path: 'new', component: MarketIndexNewComponent },
  { path: ':id', component: MarketIndexDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MarketIndex-detail-permissions'
      }
    }
  },{
    path: ':index_id/IndexStock', loadChildren: () => import('../IndexStock/IndexStock.module').then(m => m.IndexStockModule),
    data: {
        oPermission: {
            permissionId: 'IndexStock-detail-permissions'
        }
    }
}
];

export const MARKETINDEX_MODULE_DECLARATIONS = [
    MarketIndexHomeComponent,
    MarketIndexNewComponent,
    MarketIndexDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketIndexRoutingModule { }