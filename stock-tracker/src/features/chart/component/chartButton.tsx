import React, { MouseEventHandler, FC } from "react";

type ChartButtonType = {
  current: string;
  range: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const ChartButton: FC<ChartButtonType> = ({
  current,
  range,
  onClick
}) => {
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
