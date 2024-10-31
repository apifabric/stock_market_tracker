import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorHomeComponent } from './home/Investor-home.component';
import { InvestorNewComponent } from './new/Investor-new.component';
import { InvestorDetailComponent } from './detail/Investor-detail.component';

const routes: Routes = [
  {path: '', component: InvestorHomeComponent},
  { path: 'new', component: InvestorNewComponent },
  { path: ':id', component: InvestorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Investor-detail-permissions'
      }
    }
  },{
    path: ':investor_id/Portfolio', loadChildren: () => import('../Portfolio/Portfolio.module').then(m => m.PortfolioModule),
    data: {
        oPermission: {
            permissionId: 'Portfolio-detail-permissions'
        }
    }
},{
    path: ':investor_id/Transaction', loadChildren: () => import('../Transaction/Transaction.module').then(m => m.TransactionModule),
    data: {
        oPermission: {
            permissionId: 'Transaction-detail-permissions'
        }
    }
},{
    path: ':investor_id/Watchlist', loadChildren: () => import('../Watchlist/Watchlist.module').then(m => m.WatchlistModule),
    data: {
        oPermission: {
            permissionId: 'Watchlist-detail-permissions'
        }
    }
}
];

export const INVESTOR_MODULE_DECLARATIONS = [
    InvestorHomeComponent,
    InvestorNewComponent,
    InvestorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }