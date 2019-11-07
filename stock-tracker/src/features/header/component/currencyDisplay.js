import React from "react";
import { useSelector } from "react-redux";

export const CurrencyDisplay = () => {
  const response = useSelector(state => state.keyStats.response);
  const overview = useSelector(state => state.overview.companyOverview);

  console.log(response, overview);

  return (
    <div className={response ? "currency_display" : "hidden"}>
      <ul>
        <li className="currency_display__item currency_display__item__exchange">
          {overview.exchange}
        </li>
        <li className="currency_display__item currency_display__item__industry">
          {overview.industry}
        </li>
        <li
          className={
            response && response.currency
              ? "currency_display__item currency_display__item__currency"
              : "hidden"
          }
        >
          {response && response.currency}
        </li>
      </ul>
    </div>
  );
};
