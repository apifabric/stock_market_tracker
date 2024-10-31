import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionHomeComponent } from './home/Transaction-home.component';
import { TransactionNewComponent } from './new/Transaction-new.component';
import { TransactionDetailComponent } from './detail/Transaction-detail.component';

const routes: Routes = [
  {path: '', component: TransactionHomeComponent},
  { path: 'new', component: TransactionNewComponent },
  { path: ':id', component: TransactionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Transaction-detail-permissions'
      }
    }
  }
];

export const TRANSACTION_MODULE_DECLARATIONS = [
    TransactionHomeComponent,
    TransactionNewComponent,
    TransactionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }