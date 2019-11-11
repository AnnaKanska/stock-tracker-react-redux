import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  KeyboardEventHandler,
  ChangeEventHandler
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSymbolAction, setSearchInputAction } from "../redux/actions";
import { Icon } from "antd";
import "./Search.css";
import { AppState } from "../../../store/rootReducer";
import { SuggestionType } from "../redux/actions";

export const Search = () => {
  const [symbol, setSymbol] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLTableElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const addSymbol = useCallback(
    (symbol: string) => dispatch(setSymbolAction(symbol)),
    [dispatch]
  );
  const addSearchInput = useCallback(
    searchInput => dispatch(setSearchInputAction(searchInput)),
    [dispatch]
  );
  const suggestions = useSelector(
    (state: AppState) => state.search.suggestions
  );
  const response = useSelector((state: AppState) => state.keyStats.response);

  const handleSubmit: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (symbol.trim() === "") return;
      addSymbol(symbol);
      setOpen(false);
      setSymbol("");
    }
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSymbol(e.target.value);
    addSearchInput(e.target.value);
  };
  const onClick = (data: SuggestionType) => {
    addSymbol(data.symbol);
    setOpen(false);
    setSymbol("");
  };
  const handleBlur = () => {
    requestAnimationFrame(() => {
      //                                                                why the error case is needed
      if (!dropdownRef.current || !searchRef.current) {
        throw Error("Reference has not been defined yet!");
      }
      if (
        !dropdownRef.current.contains(document.activeElement) &&
        !searchRef.current.contains(document.activeElement)
      ) {
        setOpen(false);
      } else {
        searchRef.current.focus();
      }
    });
  };

  const labelSymbol = response ? ` (${response.symbol})` : "";

  useEffect(() => {
    setOpen(
      suggestions !== undefined && symbol !== "" && suggestions.length !== 0
    );
  }, [suggestions, symbol]);

  const suggestionItems =
    suggestions &&
    suggestions.length > 0 &&
    suggestions.map(data => {
      return (
        <tr
          className="search_display__suggestion_list__item"
          onClick={() => onClick(data)} // have to use function to bind data
          key={data.symbol}
        >
          <td className="search_display__suggestion_list__item__symbol">{`${data.symbol} `}</td>
          <td className="search_display__suggestion_list__item__name">{`${data.name}`}</td>
          <td className="search_display__suggestion_list__item__exchange">{`${data.exchange}`}</td>
        </tr>
      );
    });
  return (
    <div className="search_display">
      <div className="search_display__search_bar__wrapper">
        <h5>
          <Icon className="search_display__icon" type="search" />
        </h5>
        <input
          id="search_display__search_bar"
          type="text"
          value={symbol}
          onChange={onChange}
          onKeyPress={handleSubmit}
          onBlur={handleBlur}
          ref={searchRef}
          autoComplete="off"
        />
        <label
          className="search_display__search_bar__label"
          htmlFor="search_display__search_bar"
        >
          {" "}
          {response && response.companyName}
          <span className="search_display__search_bar__label__symbol">
            {labelSymbol}
          </span>
        </label>
      </div>
      <table
        ref={dropdownRef}
        tabIndex={-1}
        className="search_display__suggestion_list"
        style={{ display: open ? "block" : "none" }}
      >
        <tbody>{suggestionItems}</tbody>
      </table>
    </div>
  );
};
