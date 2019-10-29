import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../loading/component/loading";
import TopPeers from "../../topPeers/component/TopPeers";
import ErrorMessage from "../../error/error";
import "./Overview.css";

const Overview = () => {
  const overview = useSelector(state => state.overview.companyOverview);
  const loading = useSelector(state => state.overview.loading);
  const error = useSelector(state => state.overview.error);

  return (
    <div className="overview">
      <h1>COMPANY OVERVIEW</h1>
      {error ? (
        <ErrorMessage feature={"Company Overview"} />
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <h2 className={overview ? "overview__company" : "hidden"}>
            {overview.companyName} ({overview.symbol})
          </h2>
          <p>
            {" "}
            <a className="overview__web" href={overview.website}>
              {overview.website}
            </a>
          </p>
          <p className="overview__text">{overview.description}</p>
        </>
      )}
      <TopPeers />
    </div>
  );
};

export default Overview;
