import { MenuRootItem } from 'ontimize-web-ngx';

import { AnalystCardComponent } from './Analyst-card/Analyst-card.component';

import { DividendCardComponent } from './Dividend-card/Dividend-card.component';

import { IndexStockCardComponent } from './IndexStock-card/IndexStock-card.component';

import { InvestorCardComponent } from './Investor-card/Investor-card.component';

import { MarketIndexCardComponent } from './MarketIndex-card/MarketIndex-card.component';

import { NewsArticleCardComponent } from './NewsArticle-card/NewsArticle-card.component';

import { PortfolioCardComponent } from './Portfolio-card/Portfolio-card.component';

import { StockCardComponent } from './Stock-card/Stock-card.component';

import { StockPriceCardComponent } from './StockPrice-card/StockPrice-card.component';

import { StockRatingCardComponent } from './StockRating-card/StockRating-card.component';

import { TransactionCardComponent } from './Transaction-card/Transaction-card.component';

import { WatchlistCardComponent } from './Watchlist-card/Watchlist-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Analyst', name: 'ANALYST', icon: 'view_list', route: '/main/Analyst' }
    
        ,{ id: 'Dividend', name: 'DIVIDEND', icon: 'view_list', route: '/main/Dividend' }
    
        ,{ id: 'IndexStock', name: 'INDEXSTOCK', icon: 'view_list', route: '/main/IndexStock' }
    
        ,{ id: 'Investor', name: 'INVESTOR', icon: 'view_list', route: '/main/Investor' }
    
        ,{ id: 'MarketIndex', name: 'MARKETINDEX', icon: 'view_list', route: '/main/MarketIndex' }
    
        ,{ id: 'NewsArticle', name: 'NEWSARTICLE', icon: 'view_list', route: '/main/NewsArticle' }
    
        ,{ id: 'Portfolio', name: 'PORTFOLIO', icon: 'view_list', route: '/main/Portfolio' }
    
        ,{ id: 'Stock', name: 'STOCK', icon: 'view_list', route: '/main/Stock' }
    
        ,{ id: 'StockPrice', name: 'STOCKPRICE', icon: 'view_list', route: '/main/StockPrice' }
    
        ,{ id: 'StockRating', name: 'STOCKRATING', icon: 'view_list', route: '/main/StockRating' }
    
        ,{ id: 'Transaction', name: 'TRANSACTION', icon: 'view_list', route: '/main/Transaction' }
    
        ,{ id: 'Watchlist', name: 'WATCHLIST', icon: 'view_list', route: '/main/Watchlist' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AnalystCardComponent

    ,DividendCardComponent

    ,IndexStockCardComponent

    ,InvestorCardComponent

    ,MarketIndexCardComponent

    ,NewsArticleCardComponent

    ,PortfolioCardComponent

    ,StockCardComponent

    ,StockPriceCardComponent

    ,StockRatingCardComponent

    ,TransactionCardComponent

    ,WatchlistCardComponent

];