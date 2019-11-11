import React from "react";

export const ChartButton = ({ current, range, onClick }) => {
  return (
    <button
      className={
        current === range
          ? "chart__graph_btn--active"
          : "chart__graph_btn--inactive"
      }
      value={range}
      onClick={onClick}
    >
      {range}
    </button>
  );
};
