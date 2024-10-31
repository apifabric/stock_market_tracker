import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalystHomeComponent } from './home/Analyst-home.component';
import { AnalystNewComponent } from './new/Analyst-new.component';
import { AnalystDetailComponent } from './detail/Analyst-detail.component';

const routes: Routes = [
  {path: '', component: AnalystHomeComponent},
  { path: 'new', component: AnalystNewComponent },
  { path: ':id', component: AnalystDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Analyst-detail-permissions'
      }
    }
  },{
    path: ':analyst_id/StockRating', loadChildren: () => import('../StockRating/StockRating.module').then(m => m.StockRatingModule),
    data: {
        oPermission: {
            permissionId: 'StockRating-detail-permissions'
        }
    }
}
];

export const ANALYST_MODULE_DECLARATIONS = [
    AnalystHomeComponent,
    AnalystNewComponent,
    AnalystDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystRoutingModule { }