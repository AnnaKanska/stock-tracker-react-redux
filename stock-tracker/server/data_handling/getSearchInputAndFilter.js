const getSearchInputAndFilter = async (socket, input, stockCompanies) => {
  try {
    const companies = await stockCompanies;
    const searchInput = input.toLowerCase();
    const suggestedCompanies = companies.filter(
      company =>
        company.symbol.toLowerCase().indexOf(searchInput) !== -1 ||
        company.name.toLowerCase().indexOf(searchInput) !== -1
    );

    const suggestions = suggestedCompanies.map(data => ({
      symbol: data.symbol,
      name: data.name,
      exchange: data.exchange
    }));

    const sortByLength = (a, b) => {
      const aIdx = a.symbol.toLowerCase().indexOf(searchInput);
      const bIdx = b.symbol.toLowerCase().indexOf(searchInput);
      if (aIdx === -1) return 1;
      if (bIdx === -1) return -1;
      if (a.symbol.length !== b.symbol.length) {
        return a.symbol.length - b.symbol.length;
      }
      return a.symbol > b.symbol ? 1 : -1;
    };
    suggestions.sort(sortByLength);
    const autocomplete = suggestions.slice(0, 10);

    socket.emit("suggestions", { data: autocomplete });
  } catch (error) {
    socket.emit("suggestions", { isError: true });
    console.error(`Search Error: ${error}`);
  }
};

exports.getSearchInputAndFilter = getSearchInputAndFilter;
