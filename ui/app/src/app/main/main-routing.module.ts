import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Analyst', loadChildren: () => import('./Analyst/Analyst.module').then(m => m.AnalystModule) },
    
        { path: 'Dividend', loadChildren: () => import('./Dividend/Dividend.module').then(m => m.DividendModule) },
    
        { path: 'IndexStock', loadChildren: () => import('./IndexStock/IndexStock.module').then(m => m.IndexStockModule) },
    
        { path: 'Investor', loadChildren: () => import('./Investor/Investor.module').then(m => m.InvestorModule) },
    
        { path: 'MarketIndex', loadChildren: () => import('./MarketIndex/MarketIndex.module').then(m => m.MarketIndexModule) },
    
        { path: 'NewsArticle', loadChildren: () => import('./NewsArticle/NewsArticle.module').then(m => m.NewsArticleModule) },
    
        { path: 'Portfolio', loadChildren: () => import('./Portfolio/Portfolio.module').then(m => m.PortfolioModule) },
    
        { path: 'Stock', loadChildren: () => import('./Stock/Stock.module').then(m => m.StockModule) },
    
        { path: 'StockPrice', loadChildren: () => import('./StockPrice/StockPrice.module').then(m => m.StockPriceModule) },
    
        { path: 'StockRating', loadChildren: () => import('./StockRating/StockRating.module').then(m => m.StockRatingModule) },
    
        { path: 'Transaction', loadChildren: () => import('./Transaction/Transaction.module').then(m => m.TransactionModule) },
    
        { path: 'Watchlist', loadChildren: () => import('./Watchlist/Watchlist.module').then(m => m.WatchlistModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }