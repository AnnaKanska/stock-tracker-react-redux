const axios = require("axios");
const HOST = require("./constants");
const TOKEN = process.env.TOKEN;

const getStockDataAndEmit = async (socket, stockSymbol) => {
  try {
    const resPromise = axios.get(
      `${HOST}/stable/stock/${stockSymbol}/quote?token=${TOKEN}`
    );
    const epsPromise = axios.get(
      `${HOST}/stable/stock/${stockSymbol}/earnings/1/actualEPS?token=${TOKEN}`
    );
    const dividendsPromise = axios.get(
      `${HOST}/stable/stock/${stockSymbol}/dividends/1y?token=${TOKEN}`
    );
    const [res, eps, dividends] = await Promise.all([
      resPromise,
      epsPromise,
      dividendsPromise
    ]);
    const currency =
      (dividends.data[0] && dividends.data[0].currency) || undefined; // if first arguement is trufy and second condition is trufy then set current, if not then set undefined
    const {
      latestPrice,
      change,
      changePercent,
      symbol,
      companyName,
      previousClose,
      high,
      low,
      previousVolume,
      marketCap,
      peRatio,
      open,
      week52High,
      week52Low,
      avgTotalVolume,
      ytdChange,
      latestTime,
      latestUpdate,
      isUSMarketOpen
    } = res.data;
    const stockData = {
      latestPrice,
      change,
      changePercent,
      symbol,
      companyName,
      previousClose,
      high,
      low,
      previousVolume,
      marketCap,
      peRatio,
      open,
      week52High,
      week52Low,
      avgTotalVolume,
      earningsPerShare: eps.data,
      ytdChange,
      currency,
      latestTime,
      latestUpdate,
      isUSMarketOpen
    };
    console.log("!!", stockData);
    console.info("Stock data is being sent");
    socket.emit("StockData", { data: stockData }); // Emitting a new message. It will be consumed by the client
  } catch (error) {
    socket.emit("StockData", { isError: true });
    console.error(`Stock Error: ${error}`);
  }
};

exports.getStockDataAndEmit = getStockDataAndEmit;
