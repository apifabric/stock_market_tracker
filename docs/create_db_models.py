# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime, Text, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

class Investor(Base):
    """description: Represents an investor in the stock market."""
    __tablename__ = 'Investor'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=True)

class Stock(Base):
    """description: Represents a stock listed in the market."""
    __tablename__ = 'Stock'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    symbol = Column(String, nullable=False)
    name = Column(String, nullable=False)
    market_sector = Column(String, nullable=True)

class Transaction(Base):
    """description: Represents transactions of stock buying or selling by investors."""
    __tablename__ = 'Transaction'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    investor_id = Column(Integer, ForeignKey('Investor.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('Stock.id'), nullable=False)
    datetime = Column(DateTime, nullable=False, default=datetime.utcnow)
    transaction_type = Column(String, nullable=False)  # e.g., 'buy' or 'sell'
    shares = Column(Float, nullable=False)
    price_per_share = Column(Float, nullable=False)

class MarketIndex(Base):
    """description: Represents a market index comprised of multiple stocks."""
    __tablename__ = 'MarketIndex'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)

class IndexStock(Base):
    """description: Represents relationship between stocks and market indices."""
    __tablename__ = 'IndexStock'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    index_id = Column(Integer, ForeignKey('MarketIndex.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('Stock.id'), nullable=False)

class StockPrice(Base):
    """description: Represents historical prices for stocks."""
    __tablename__ = 'StockPrice'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('Stock.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    open_price = Column(Float, nullable=False)
    close_price = Column(Float, nullable=False)
    high_price = Column(Float, nullable=False)
    low_price = Column(Float, nullable=False)
    volume = Column(Float, nullable=False)

class Analyst(Base):
    """description: Represents an analyst who provides stock ratings."""
    __tablename__ = 'Analyst'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    firm = Column(String, nullable=True)

class StockRating(Base):
    """description: Represents ratings given by analysts for stocks."""
    __tablename__ = 'StockRating'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('Stock.id'), nullable=False)
    analyst_id = Column(Integer, ForeignKey('Analyst.id'), nullable=False)
    rating = Column(String, nullable=False)  # e.g., 'buy', 'hold', 'sell'
    rating_date = Column(DateTime, nullable=False, default=datetime.utcnow)

class Portfolio(Base):
    """description: Represents an investor's stock portfolio."""
    __tablename__ = 'Portfolio'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    investor_id = Column(Integer, ForeignKey('Investor.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('Stock.id'), nullable=False)
    shares_owned = Column(Float, nullable=False)

class Dividend(Base):
    """description: Represents dividend history of stocks."""
    __tablename__ = 'Dividend'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('Stock.id'), nullable=False)
    date_declared = Column(DateTime, nullable=False)
    date_paid = Column(DateTime, nullable=False)
    amount_per_share = Column(Float, nullable=False)

class NewsArticle(Base):
    """description: Represents news articles related to stocks."""
    __tablename__ = 'NewsArticle'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    stock_id = Column(Integer, ForeignKey('Stock.id'), nullable=True)
    publish_date = Column(DateTime, nullable=False)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=True)

class Watchlist(Base):
    """description: Represents a list of stocks being watched by an investor."""
    __tablename__ = 'Watchlist'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    investor_id = Column(Integer, ForeignKey('Investor.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('Stock.id'), nullable=False)

# Create an engine and a session
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Sample data instantiation
investor1 = Investor(name='John Doe', email='john@example.com')
investor2 = Investor(name='Jane Smith', email='jane@example.com')

stock1 = Stock(symbol='AAPL', name='Apple Inc.', market_sector='Technology')
stock2 = Stock(symbol='TSLA', name='Tesla, Inc.', market_sector='Automobile')
stock3 = Stock(symbol='GOOGL', name='Alphabet Inc.', market_sector='Technology')

transaction1 = Transaction(investor_id=1, stock_id=1, transaction_type='buy', shares=10, price_per_share=150.25)
transaction2 = Transaction(investor_id=2, stock_id=2, transaction_type='sell', shares=5, price_per_share=800.0)

market_index1 = MarketIndex(name='S&P 500', description='Standard & Poor\'s 500 Index')
market_index2 = MarketIndex(name='NASDAQ Composite', description='NASDAQ Stock Market Composite Index')

index_stock1 = IndexStock(index_id=1, stock_id=1)
index_stock2 = IndexStock(index_id=1, stock_id=3)
index_stock3 = IndexStock(index_id=2, stock_id=2)

stock_price1 = StockPrice(stock_id=1, date=datetime(2023, 1, 1), open_price=148.0, close_price=150.25, high_price=151.0, low_price=147.5, volume=3000000)
stock_price2 = StockPrice(stock_id=2, date=datetime(2023, 1, 1), open_price=775.0, close_price=800.0, high_price=805.0, low_price=770.0, volume=2000000)

analyst1 = Analyst(name='Harmony Invest', firm='Investopedia')
analyst2 = Analyst(name='Chris Financial', firm='Finance Times')

stock_rating1 = StockRating(stock_id=1, analyst_id=1, rating='buy')
stock_rating2 = StockRating(stock_id=3, analyst_id=2, rating='hold')

portfolio1 = Portfolio(investor_id=1, stock_id=1, shares_owned=10)
portfolio2 = Portfolio(investor_id=2, stock_id=3, shares_owned=20)

dividend1 = Dividend(stock_id=1, date_declared=datetime(2023, 1, 1), date_paid=datetime(2023, 2, 1), amount_per_share=0.5)
dividend2 = Dividend(stock_id=2, date_declared=datetime(2023, 1, 2), date_paid=datetime(2023, 2, 2), amount_per_share=0.3)

news_article1 = NewsArticle(stock_id=1, publish_date=datetime(2023, 1, 1), title='Apple Launches New Product', content='Apple has launched a new revolutionary product...')
news_article2 = NewsArticle(stock_id=2, publish_date=datetime(2023, 1, 5), title='Tesla Shares Surge', content='Tesla shares surge after positive earnings report.')

watchlist1 = Watchlist(investor_id=1, stock_id=2)
watchlist2 = Watchlist(investor_id=2, stock_id=1)

# Add sample data to session
session.add_all([
    investor1, investor2, stock1, stock2, stock3,
    transaction1, transaction2, market_index1, market_index2,
    index_stock1, index_stock2, index_stock3, stock_price1, stock_price2,
    analyst1, analyst2, stock_rating1, stock_rating2, portfolio1, portfolio2,
    dividend1, dividend2, news_article1, news_article2, watchlist1, watchlist2
])

# Commit the session
session.commit()
session.close()
