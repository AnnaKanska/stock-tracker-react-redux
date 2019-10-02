import React from "react";
import { useSelector } from 'react-redux';
const moment = require('moment');

const LatestNews = () => {
  const latestNews = useSelector((state) => state.latestNews)
  const newsDisplay = latestNews.map((news, index) => (
    <div key={index}>
      <p className="newsHeadline">{news.headline}</p>
      <p className="newsTime">{moment(news.datetime).fromNow()}</p>
      <p className="newsSource">{news.source}</p>
    </div>
  ));

  
  return (
    <div className="latestnews">
      <h3>Latest news</h3>
      {newsDisplay}
    </div>
  );
};

export default LatestNews;
