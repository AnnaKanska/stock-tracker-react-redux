import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSymbolAction, Search } from "../../search";
import logo from "../assets/logo.png";
import "./Header.css";
import {
  MarketStatus,
  CurrencyDisplay,
  PriceDisplay,
  HeaderButtons
} from "../index";

export const Header = () => {
  const dispatch = useDispatch();
  const addSymbol = useCallback(symbol => dispatch(setSymbolAction(symbol)), [
    dispatch
  ]);
  const onClick = () => {
    addSymbol("");
  };
  return (
    <div className="header">
      <img onClick={onClick} className="header__logo" alt="logo" src={logo} />
      <HeaderButtons />
      <Search />
      <PriceDisplay />
      <CurrencyDisplay />
      <MarketStatus />
    </div>
  );
};
