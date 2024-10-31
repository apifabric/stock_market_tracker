import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DividendHomeComponent } from './home/Dividend-home.component';
import { DividendNewComponent } from './new/Dividend-new.component';
import { DividendDetailComponent } from './detail/Dividend-detail.component';

const routes: Routes = [
  {path: '', component: DividendHomeComponent},
  { path: 'new', component: DividendNewComponent },
  { path: ':id', component: DividendDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Dividend-detail-permissions'
      }
    }
  }
];

export const DIVIDEND_MODULE_DECLARATIONS = [
    DividendHomeComponent,
    DividendNewComponent,
    DividendDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividendRoutingModule { }