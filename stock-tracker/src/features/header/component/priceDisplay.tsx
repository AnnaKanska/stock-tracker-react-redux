import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "antd";
import { AppState } from "../../../store/rootReducer";

export const PriceDisplay = () => {
  const response = useSelector((state: AppState) => state.keyStats.response);

  return (
    <div className="price_display">
      <p className="price_display__small_icon">{response ? "$" : ""}</p>
      <h4>{response ? response.latestPrice : ""}</h4>
      <h4
        className={
          response
            ? response.change < 0
              ? "price_display--decrease"
              : "price_display--increase"
            : "hidden"
        }
      >
        <Icon
          className="price_display__arrow_icon"
          type={response && response.change < 0 ? "arrow-down" : "arrow-up"}
        />
        {response && response.change
          ? Math.abs(response.change).toFixed(2)
          : ""}{" "}
        <span className="separator">|</span>
      </h4>
      <h4
        className={
          response && response.changePercent
            ? response.changePercent < 0
              ? "price_display--decrease"
              : "price_display--increase"
            : "hidden"
        }
      >
        {response && response.changePercent
          ? Math.abs(response.changePercent).toFixed(2)
          : ""}
      </h4>
      <p
        className={
          response && response.changePercent < 0
            ? "price_display__small_icon price_display--decrease"
            : "price_display__small_icon price_display--increase"
        }
      >
        {response ? "%" : ""}
      </p>
    </div>
  );
};
