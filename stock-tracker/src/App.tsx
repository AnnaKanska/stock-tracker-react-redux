import React from "react";
import { useSelector } from "react-redux";
import { Header } from "./features/header";
import { KeyStats } from "./features/keyStats";
import { Chart } from "./features/chart/component/chart";
import { LatestNews } from "./features/latestNews";
import { Overview } from "./features/overview";
import { Footer } from "./features/footer";
import { AppState } from "./store/rootReducer";
import "./assets/styles/App.css";

function App() {
  const symbol = useSelector((state: AppState) => state.search.symbol);
  return (
    <>
      <div className="wrapper">
        <Header />
        {symbol !== "" && (
          <>
            <Chart />
            <KeyStats />
            <LatestNews />
            <Overview />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
export default App;
