import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioHomeComponent } from './home/Portfolio-home.component';
import { PortfolioNewComponent } from './new/Portfolio-new.component';
import { PortfolioDetailComponent } from './detail/Portfolio-detail.component';

const routes: Routes = [
  {path: '', component: PortfolioHomeComponent},
  { path: 'new', component: PortfolioNewComponent },
  { path: ':id', component: PortfolioDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Portfolio-detail-permissions'
      }
    }
  }
];

export const PORTFOLIO_MODULE_DECLARATIONS = [
    PortfolioHomeComponent,
    PortfolioNewComponent,
    PortfolioDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }