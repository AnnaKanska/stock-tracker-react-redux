import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../loading/component/loading";
import ErrorMessage from "../../error/error";
import "./LatestNews.css";
import moment from "moment";
import { AppState } from "../../../store/rootReducer";

export const LatestNews = () => {
  const { latestNews, loading, error } = useSelector(
    (state: AppState) => state.news
  );

  const newsDisplay = latestNews.map((news, index) => (
    <div className="news" key={index}>
      <p className={index === 0 ? "first_news news_headline" : "news_headline"}>
        {/* without rel tag, makes site vulnerable to phishing attacks as newly opened site gains read/write access to window.opener.location that can be changed and cause browser to go to new URL instead of your page */}
        <a rel="noopener noreferrer" href={news.url} target="_blank">
          {news.headline}
        </a>
      </p>
      <p className="news_time">{moment(news.datetime).fromNow()}</p>
      <p className="news_source">- {news.source}</p>
    </div>
  ));

  return (
    <div className="latestnews">
      <h1>LATEST NEWS</h1>
      {error ? (
        <ErrorMessage feature={"Latest News"} />
      ) : loading ? (
        <Loading />
      ) : (
        newsDisplay
      )}
    </div>
  );
};
