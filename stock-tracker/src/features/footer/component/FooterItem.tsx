import React from "react";
import { Icon } from "antd";
import "./Footer.css";

interface FooterItems {
  exchange: string;
  currency: string;
  price: number;
  changePrice: number;
  changePercentage: number;
}

export const FooterItem = ({
  exchange,
  currency,
  price,
  changePrice,
  changePercentage
}: FooterItems) => {
  const changeIcon = changePrice > 0 ? "arrow-up" : "arrow-down";
  const changeColour = changePrice > 0 ? "green" : "red";

  return (
    <>
      <span className="footer__heading">{exchange} </span>
      <sup>{currency}</sup>
      {price}
      <span className={changeColour}>
        <sup>
          <Icon className="arrow" type={changeIcon}></Icon>
        </sup>
        {Math.abs(changePrice)} <span className="separator">|</span>{" "}
        {changePercentage}
        <sup className="percentage">%</sup>
      </span>
    </>
  );
};
