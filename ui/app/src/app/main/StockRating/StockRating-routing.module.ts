import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockRatingHomeComponent } from './home/StockRating-home.component';
import { StockRatingNewComponent } from './new/StockRating-new.component';
import { StockRatingDetailComponent } from './detail/StockRating-detail.component';

const routes: Routes = [
  {path: '', component: StockRatingHomeComponent},
  { path: 'new', component: StockRatingNewComponent },
  { path: ':id', component: StockRatingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StockRating-detail-permissions'
      }
    }
  }
];

export const STOCKRATING_MODULE_DECLARATIONS = [
    StockRatingHomeComponent,
    StockRatingNewComponent,
    StockRatingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRatingRoutingModule { }