const {getSearchInputAndFilter} = require("./getSearchInputAndFilter")
const {getStockDataAndEmit} = require("./getStockDataAndEmit")
const {getTopPeersAndEmit} = require("./getTopPeersAndEmit")
const {getChartDataAndEmit} = require("./getChartDataAndEmit")
const {getNewsDataAndEmit} = require("./getNewsDataAndEmit")
const {getCompanyOverviewAndEmit} = require("./getCompanyOverviewAndEmit")
const {getCompaniesFromAPI} = require("./getCompaniesFromAPI")
const DAY_IN_MS = 86400000;
const HALF_DAY = DAY_IN_MS / 2;

function callNowAndInterval(fn, interval, ...args) {
  fn(...args);
  return setInterval(fn, interval, ...args);
}

const HANDLE_DATA = (socket) => {
  const intervals = {};
  console.info("New client connected");
  const stockCompanies = getCompaniesFromAPI(socket);
  socket.on("search", searchInput => {
    getSearchInputAndFilter(socket, searchInput, stockCompanies);
  });
  socket.on("symbol", (stockSymbol, chartTime) => {
    if (stockSymbol === "") {
      Object.values(intervals).forEach(clearInterval);
      return;
    }
    console.info("Stock Symbol Entered: " + stockSymbol);
    Object.values(intervals).forEach(clearInterval);
    intervals.stock = callNowAndInterval(
      getStockDataAndEmit,
      10000,
      socket,
      stockSymbol
    );
    intervals.overview = callNowAndInterval(
      getCompanyOverviewAndEmit,
      DAY_IN_MS,
      socket,
      stockSymbol
    );
    intervals.news = callNowAndInterval(
      getNewsDataAndEmit,
      DAY_IN_MS,
      socket,
      stockSymbol
    );
    intervals.chartData = callNowAndInterval(
      getChartDataAndEmit,
      HALF_DAY,
      socket,
      stockSymbol,
      chartTime
    );
    intervals.peers = callNowAndInterval(
      getTopPeersAndEmit,
      DAY_IN_MS,
      socket,
      stockSymbol
    );
  });
  socket.on("chartTime", (stockSymbol, chartTime) => {
    clearInterval(intervals.chartData);
    intervals.chartData = callNowAndInterval(
      getChartDataAndEmit,
      HALF_DAY,
      socket,
      stockSymbol,
      chartTime
    );
  });
  socket.on("disconnect", () => {
    Object.values(intervals).forEach(clearInterval);
    console.info("Client disconnected");
  });
};
exports.HANDLE_DATA = HANDLE_DATA;