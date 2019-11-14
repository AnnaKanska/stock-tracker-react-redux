import React, { MouseEventHandler, FC } from "react";

interface ChartButtonInterface {
  current: string;
  range: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ChartButton: FC<ChartButtonInterface> = ({
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
