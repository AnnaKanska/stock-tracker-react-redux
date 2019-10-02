import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSymbolAction } from '../store/actions';
import logo from '../assets/logo.png';
import { Icon } from 'antd';

const Header = () => {
  const [symbol, setSymbol] = useState("")
  const dispatch = useDispatch()
  const addSymbol = useCallback((symbol) => dispatch(addSymbolAction(symbol)), [dispatch])
  const response = useSelector((state) => state.response)
  const overview = useSelector((state) => state.companyOverview)
  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (symbol.trim() === '') return;
      addSymbol(symbol)
      setSymbol('');
    }
  }
  const changeNo = Math.abs(Math.round(response.change * 100) / 100) || "";
  const changePercentNo = Math.abs(Math.round(response.changePercent * 100) / 100) || "";

  return (
    <>
      <div className="headerContainer">
        <img className="logo" alt="logo" src={logo} />
        <div className="HeaderBtns">
          <button className="headerBtn quotesBtn">QUOTES</button>
          <button className="headerBtn">MARKETS</button>
          <button className="headerBtn">WATCHLIST</button>
        </div>
      </div>
      <div className="searchDisplay">
        <input className="searchBar" placeholder={response ? `${response.companyName} (${response.symbol})` : ""} type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} onKeyPress={handleSubmit} />
        <div className="priceDisplay">
          <h3>{response.latestPrice}</h3>
          <h3 className={(response.change < 0) ? "priceDecrease" : "priceIncrease"}><Icon type={(response.change < 0) ? "arrow-down" : "arrow-up"} />{changeNo}</h3>
          <h3 className={(response.changePercent < 0) ? "priceDecrease" : "priceIncrease"}>{changePercentNo}</h3>
        </div>
      </div>
      <div>
      {/* TODO: STYLE INTO NICE BOXES HORIZONTAL */}
        <p>{overview.exchange}</p> 
        <p>{overview.industry}</p>
        <p>{response.currency}</p>
      </div>
    </>
  )
}
export default Header;