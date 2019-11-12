import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../loading/component/loading";
import ErrorMessage from "../../error/error";
import "./KeyStats.css";
import { AppState } from "../../../store/rootReducer";

export const KeyStats = () => {
  const { response, loading, error } = useSelector(
    (state: AppState) => state.keyStats
  );

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="keystats">
      <h1>KEY STATS</h1>
      {error ? (
        <ErrorMessage feature={"Key stats"} />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="keystats__grid">
          <table className="keystats__grid__display1">
            <tbody>
              <tr>
                <td className="keystats__grid__display1__name">
                  Previous Close
                </td>
                <td className="keystats__grid__display1__value">
                  {response && response.previousClose
                    ? Math.abs(response.previousClose).toFixed(2)
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="keystats__grid__display1__name">Day Range</td>
                <td className="keystats__grid__display1__value">
                  {response && response.high && response.low
                    ? Math.abs(response.high).toFixed(2) +
                      "-" +
                      Math.abs(response.low).toFixed(2)
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="keystats__grid__display1__name">Volume</td>
                <td className="keystats__grid__display1__value">
                  {response && response.previousVolume
                    ? numberWithCommas(response.previousVolume)
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="keystats__grid__display1__name">Market Cap</td>
                <td className="keystats__grid__display1__value">
                  {response && response.marketCap
                    ? numberWithCommas(response.marketCap)
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="keystats__grid__display1__name">P/E Ratio</td>
                <td className="keystats__grid__display1__value">
                  {response && response.peRatio
                    ? Math.abs(response.peRatio).toFixed(2)
                    : "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="keystats__grid__display2">
            <tbody>
              <tr>
                <td className="keystats__grid__display1__name">Open</td>
                <td className="keystats__grid__display1__value">
                  {response && response.open
                    ? Math.abs(response.open).toFixed(2)
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="keystats__grid__display1__name">
                  52 Week Range
                </td>
                <td className="keystats__grid__display1__value">
                  {response && response.week52High && response.week52Low
                    ? Math.abs(response.week52High).toFixed(2) +
                      "-" +
                      Math.abs(response.week52Low).toFixed(2)
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="keystats__grid__display1__name">
                  Total Avg Volume
                </td>
                <td className="keystats__grid__display1__value">
                  {response && response.avgTotalVolume
                    ? numberWithCommas(response.avgTotalVolume)
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="keystats__grid__display1__name">
                  Earning Per Share
                </td>
                <td className="keystats__grid__display1__value">
                  {response && response.earningsPerShare
                    ? response.earningsPerShare
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="keystats__grid__display1__name">
                  Dividend & Yield
                </td>
                <td className="keystats__grid__display1__value">
                  {response && response.ytdChange
                    ? Math.abs(response.ytdChange).toFixed(2) + "%"
                    : "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
