const axios = require("axios");
const HOST = require("./constants");
const TOKEN = process.env.TOKEN;

const getNewsDataAndEmit = async (socket, stockSymbol) => {
  try {
    const latestNews = await axios.get(
      `${HOST}/stable/stock/${stockSymbol}/news/last/5?token=${TOKEN}`
    );
    const news = latestNews.data.map(data => ({
      headline: data.headline,
      datetime: data.datetime,
      source: data.source,
      url: data.url
    }));
    socket.emit("LatestNews", { data: news });
  } catch (error) {
    socket.emit("LatestNews", { isError: true });
    console.error(`News Error: ${error}`);
  }
};

exports.getNewsDataAndEmit = getNewsDataAndEmit;
