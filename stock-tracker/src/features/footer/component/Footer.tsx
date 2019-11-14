import React from "react";
import "./Footer.css";
import { FooterItem } from "./FooterItem";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="usMarket">
        <p className="footer1">US MARKET</p>
        <p className="footer2">
          <FooterItem
            exchange="NASDAQ"
            currency="$"
            price={6850.05}
            changePrice={-72.89}
            changePercentage={1.08}
          />
          <FooterItem
            exchange="DJIA"
            currency="$"
            price={23026.35}
            changePrice={165.89}
            changePercentage={0.7}
          />
          <FooterItem
            exchange="S&P"
            currency="$"
            price={2605.35}
            changePrice={23.35}
            changePercentage={0.94}
          />
        </p>
      </div>
      <div className="favorites">
        <p className="footer1">FAVORITES</p>
        <p className="footer2">
          <FooterItem
            exchange="MSFT"
            currency="$"
            price={86.92}
            changePrice={1.91}
            changePercentage={2.25}
          />
          <FooterItem
            exchange="AAPL"
            currency="$"
            price={160.03}
            changePrice={-2.94}
            changePercentage={1.88}
          />
          <FooterItem
            exchange="GOOG"
            currency="$"
            price={1017.49}
            changePrice={15.97}
            changePercentage={1.59}
          />
        </p>
      </div>
    </div>
  );
};
