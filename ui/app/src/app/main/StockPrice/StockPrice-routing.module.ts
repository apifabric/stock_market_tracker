import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockPriceHomeComponent } from './home/StockPrice-home.component';
import { StockPriceNewComponent } from './new/StockPrice-new.component';
import { StockPriceDetailComponent } from './detail/StockPrice-detail.component';

const routes: Routes = [
  {path: '', component: StockPriceHomeComponent},
  { path: 'new', component: StockPriceNewComponent },
  { path: ':id', component: StockPriceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'StockPrice-detail-permissions'
      }
    }
  }
];

export const STOCKPRICE_MODULE_DECLARATIONS = [
    StockPriceHomeComponent,
    StockPriceNewComponent,
    StockPriceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockPriceRoutingModule { }