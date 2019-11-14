import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../loading/component/loading";
import { TopPeers } from "../../topPeers";
import ErrorMessage from "../../error/error";
import "./Overview.css";
import { AppState } from "../../../store/rootReducer";

export const Overview = () => {
  const { companyDetails: companyOverview, loading, error } = useSelector(
    (state: AppState) => state.companyOverview
  );

  return (
    <div className="overview">
      <h1>COMPANY OVERVIEW</h1>
      {loading ? (
        <Loading />
      ) : error || !companyOverview ? (
        <ErrorMessage feature={"Company Overview"} />
      ) : (
        <>
          <h2 className={companyOverview ? "overview__company" : "hidden"}>
            {companyOverview.companyName} ({companyOverview.symbol})
          </h2>
          <p>
            {" "}
            <a
              rel="noopener noreferrer"
              className="overview__web"
              href={companyOverview.website}
              target="_blank"
            >
              {companyOverview.website}
            </a>
          </p>
          <p className="overview__text">{companyOverview.description}</p>
        </>
      )}
      <TopPeers />
    </div>
  );
};
