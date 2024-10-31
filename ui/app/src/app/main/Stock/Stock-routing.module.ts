import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockHomeComponent } from './home/Stock-home.component';
import { StockNewComponent } from './new/Stock-new.component';
import { StockDetailComponent } from './detail/Stock-detail.component';

const routes: Routes = [
  {path: '', component: StockHomeComponent},
  { path: 'new', component: StockNewComponent },
  { path: ':id', component: StockDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Stock-detail-permissions'
      }
    }
  },{
    path: ':stock_id/Dividend', loadChildren: () => import('../Dividend/Dividend.module').then(m => m.DividendModule),
    data: {
        oPermission: {
            permissionId: 'Dividend-detail-permissions'
        }
    }
},{
    path: ':stock_id/IndexStock', loadChildren: () => import('../IndexStock/IndexStock.module').then(m => m.IndexStockModule),
    data: {
        oPermission: {
            permissionId: 'IndexStock-detail-permissions'
        }
    }
},{
    path: ':stock_id/NewsArticle', loadChildren: () => import('../NewsArticle/NewsArticle.module').then(m => m.NewsArticleModule),
    data: {
        oPermission: {
            permissionId: 'NewsArticle-detail-permissions'
        }
    }
},{
    path: ':stock_id/Portfolio', loadChildren: () => import('../Portfolio/Portfolio.module').then(m => m.PortfolioModule),
    data: {
        oPermission: {
            permissionId: 'Portfolio-detail-permissions'
        }
    }
},{
    path: ':stock_id/StockPrice', loadChildren: () => import('../StockPrice/StockPrice.module').then(m => m.StockPriceModule),
    data: {
        oPermission: {
            permissionId: 'StockPrice-detail-permissions'
        }
    }
},{
    path: ':stock_id/StockRating', loadChildren: () => import('../StockRating/StockRating.module').then(m => m.StockRatingModule),
    data: {
        oPermission: {
            permissionId: 'StockRating-detail-permissions'
        }
    }
},{
    path: ':stock_id/Transaction', loadChildren: () => import('../Transaction/Transaction.module').then(m => m.TransactionModule),
    data: {
        oPermission: {
            permissionId: 'Transaction-detail-permissions'
        }
    }
},{
    path: ':stock_id/Watchlist', loadChildren: () => import('../Watchlist/Watchlist.module').then(m => m.WatchlistModule),
    data: {
        oPermission: {
            permissionId: 'Watchlist-detail-permissions'
        }
    }
}
];

export const STOCK_MODULE_DECLARATIONS = [
    StockHomeComponent,
    StockNewComponent,
    StockDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }