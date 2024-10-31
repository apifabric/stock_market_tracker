# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 31, 2024 09:06:14
# Database: sqlite:////tmp/tmp.YMTBQ291aN/stock_market_tracker/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Analyst(SAFRSBaseX, Base):
    """
    description: Represents an analyst who provides stock ratings.
    """
    __tablename__ = 'Analyst'
    _s_collection_name = 'Analyst'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    firm = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    StockRatingList : Mapped[List["StockRating"]] = relationship(back_populates="analyst")



class Investor(SAFRSBaseX, Base):
    """
    description: Represents an investor in the stock market.
    """
    __tablename__ = 'Investor'
    _s_collection_name = 'Investor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    PortfolioList : Mapped[List["Portfolio"]] = relationship(back_populates="investor")
    TransactionList : Mapped[List["Transaction"]] = relationship(back_populates="investor")
    WatchlistList : Mapped[List["Watchlist"]] = relationship(back_populates="investor")



class MarketIndex(SAFRSBaseX, Base):
    """
    description: Represents a market index comprised of multiple stocks.
    """
    __tablename__ = 'MarketIndex'
    _s_collection_name = 'MarketIndex'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    IndexStockList : Mapped[List["IndexStock"]] = relationship(back_populates="index")



class Stock(SAFRSBaseX, Base):
    """
    description: Represents a stock listed in the market.
    """
    __tablename__ = 'Stock'
    _s_collection_name = 'Stock'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    symbol = Column(String, nullable=False)
    name = Column(String, nullable=False)
    market_sector = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    DividendList : Mapped[List["Dividend"]] = relationship(back_populates="stock")
    IndexStockList : Mapped[List["IndexStock"]] = relationship(back_populates="stock")
    NewsArticleList : Mapped[List["NewsArticle"]] = relationship(back_populates="stock")
    PortfolioList : Mapped[List["Portfolio"]] = relationship(back_populates="stock")
    StockPriceList : Mapped[List["StockPrice"]] = relationship(back_populates="stock")
    StockRatingList : Mapped[List["StockRating"]] = relationship(back_populates="stock")
    TransactionList : Mapped[List["Transaction"]] = relationship(back_populates="stock")
    WatchlistList : Mapped[List["Watchlist"]] = relationship(back_populates="stock")



class Dividend(SAFRSBaseX, Base):
    """
    description: Represents dividend history of stocks.
    """
    __tablename__ = 'Dividend'
    _s_collection_name = 'Dividend'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('Stock.id'), nullable=False)
    date_declared = Column(DateTime, nullable=False)
    date_paid = Column(DateTime, nullable=False)
    amount_per_share = Column(Float, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("DividendList"))

    # child relationships (access children)



class IndexStock(SAFRSBaseX, Base):
    """
    description: Represents relationship between stocks and market indices.
    """
    __tablename__ = 'IndexStock'
    _s_collection_name = 'IndexStock'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    index_id = Column(ForeignKey('MarketIndex.id'), nullable=False)
    stock_id = Column(ForeignKey('Stock.id'), nullable=False)

    # parent relationships (access parent)
    index : Mapped["MarketIndex"] = relationship(back_populates=("IndexStockList"))
    stock : Mapped["Stock"] = relationship(back_populates=("IndexStockList"))

    # child relationships (access children)



class NewsArticle(SAFRSBaseX, Base):
    """
    description: Represents news articles related to stocks.
    """
    __tablename__ = 'NewsArticle'
    _s_collection_name = 'NewsArticle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('Stock.id'))
    publish_date = Column(DateTime, nullable=False)
    title = Column(String, nullable=False)
    content = Column(Text)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("NewsArticleList"))

    # child relationships (access children)



class Portfolio(SAFRSBaseX, Base):
    """
    description: Represents an investor's stock portfolio.
    """
    __tablename__ = 'Portfolio'
    _s_collection_name = 'Portfolio'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    investor_id = Column(ForeignKey('Investor.id'), nullable=False)
    stock_id = Column(ForeignKey('Stock.id'), nullable=False)
    shares_owned = Column(Float, nullable=False)

    # parent relationships (access parent)
    investor : Mapped["Investor"] = relationship(back_populates=("PortfolioList"))
    stock : Mapped["Stock"] = relationship(back_populates=("PortfolioList"))

    # child relationships (access children)



class StockPrice(SAFRSBaseX, Base):
    """
    description: Represents historical prices for stocks.
    """
    __tablename__ = 'StockPrice'
    _s_collection_name = 'StockPrice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('Stock.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    open_price = Column(Float, nullable=False)
    close_price = Column(Float, nullable=False)
    high_price = Column(Float, nullable=False)
    low_price = Column(Float, nullable=False)
    volume = Column(Float, nullable=False)

    # parent relationships (access parent)
    stock : Mapped["Stock"] = relationship(back_populates=("StockPriceList"))

    # child relationships (access children)



class StockRating(SAFRSBaseX, Base):
    """
    description: Represents ratings given by analysts for stocks.
    """
    __tablename__ = 'StockRating'
    _s_collection_name = 'StockRating'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    stock_id = Column(ForeignKey('Stock.id'), nullable=False)
    analyst_id = Column(ForeignKey('Analyst.id'), nullable=False)
    rating = Column(String, nullable=False)
    rating_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    analyst : Mapped["Analyst"] = relationship(back_populates=("StockRatingList"))
    stock : Mapped["Stock"] = relationship(back_populates=("StockRatingList"))

    # child relationships (access children)



class Transaction(SAFRSBaseX, Base):
    """
    description: Represents transactions of stock buying or selling by investors.
    """
    __tablename__ = 'Transaction'
    _s_collection_name = 'Transaction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    investor_id = Column(ForeignKey('Investor.id'), nullable=False)
    stock_id = Column(ForeignKey('Stock.id'), nullable=False)
    datetime = Column(DateTime, nullable=False)
    transaction_type = Column(String, nullable=False)
    shares = Column(Float, nullable=False)
    price_per_share = Column(Float, nullable=False)

    # parent relationships (access parent)
    investor : Mapped["Investor"] = relationship(back_populates=("TransactionList"))
    stock : Mapped["Stock"] = relationship(back_populates=("TransactionList"))

    # child relationships (access children)



class Watchlist(SAFRSBaseX, Base):
    """
    description: Represents a list of stocks being watched by an investor.
    """
    __tablename__ = 'Watchlist'
    _s_collection_name = 'Watchlist'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    investor_id = Column(ForeignKey('Investor.id'), nullable=False)
    stock_id = Column(ForeignKey('Stock.id'), nullable=False)

    # parent relationships (access parent)
    investor : Mapped["Investor"] = relationship(back_populates=("WatchlistList"))
    stock : Mapped["Stock"] = relationship(back_populates=("WatchlistList"))

    # child relationships (access children)
