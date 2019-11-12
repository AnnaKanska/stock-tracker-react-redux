import React, { useState, MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { setChartTimeAction } from "../index";
import Loading from "../../loading/component/loading";
import ErrorMessage from "../../error/error";
import { ChartButton } from "./chartButton";
import "./chart.css";
import moment from "moment";
import { AppState } from "../../../store/rootReducer";

export const Chart = () => {
  const dispatch = useDispatch();
  const { chartData, loading, error } = useSelector(
    (state: AppState) => state.chart
  );

  const [current, setCurrent] = useState("1Y");

  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    dispatch(setChartTimeAction(e.currentTarget.value));
    setCurrent(e.currentTarget.value);
  };

  const latestValue =
    chartData && chartData[chartData.length - 1] !== undefined
      ? chartData[chartData.length - 1].close
      : "";

  const formatDate = (tickItem: string) => {
    switch (current) {
      case "1D":
        return tickItem;
      case "5D":
        return moment(tickItem).format("dddd");
      case "1M":
        return moment(tickItem).format("MMM Do");
      case "1Y":
        return moment(tickItem).format("MMM Do");
      case "5Y":
        return moment(tickItem).format("MMM, YYYY");
      case "MAX":
        return moment(tickItem).format("MMM DD, YYYY");
      default:
        return tickItem;
    }
  };
  return (
    <div className="chart">
      {error ? (
        <ErrorMessage feature={"Chart data"} />
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <div className="chart__graph_btn">
            <ChartButton current={current} range="1D" onClick={onClick} />
            <ChartButton current={current} range="5D" onClick={onClick} />
            <ChartButton current={current} range="1M" onClick={onClick} />
            <ChartButton current={current} range="1Y" onClick={onClick} />
            <ChartButton current={current} range="5Y" onClick={onClick} />
            <ChartButton current={current} range="MAX" onClick={onClick} />
          </div>
          <ResponsiveContainer className="responsive_chart">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid stroke="#f5f5f5" opacity="0.25" />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#73b3ef" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#73b3ef" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                interval="preserveStart"
                tickFormatter={formatDate}
                dataKey="date"
                tick={{ fill: "#ffffff" }}
              />
              <YAxis
                tick={{ fill: "#ffffff" }}
                tickFormatter={tick => tick.toFixed(2)}
                orientation="right"
              />
              <ReferenceLine
                y={latestValue}
                isFront={true}
                label={
                  <Label
                    value={latestValue}
                    fill="var(--bad)"
                    fontSize="14"
                    position="right"
                  />
                }
                stroke="var(--bad)"
                strokeDasharray="3 3"
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="close"
                stroke="#73b3ef"
                fillOpacity={1}
                fill="url(#colorUv)"
                connectNulls
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};
