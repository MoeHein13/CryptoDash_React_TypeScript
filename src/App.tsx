import { useState, type ChangeEvent } from "react";
import CoinList from "./Components/CoinList";
import CountPage from "./Components/CountPage";
import FilterCoin from "./Components/FilterCoin";
import useFetchData from "./Hooks/FetchData";
import SortCoin from "./Components/SortCoin";

export type Coins = {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  [key: string]: unknown;
};

const App = () => {
  const { coins, loading, page, error, setPage } = useFetchData() as {
    coins: Coins[];
    loading: boolean;
    page: number;
    error: string | null;
    setPage: (page: number) => void;
  };

  const [filterCoin, setFilterCoin] = useState<string>("");
  const [sortBy, setSortBy] = useState("");

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterCoin(e.target.value);
  };

  const handlePage = (e: ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(e.target.value));
  };

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const filteredCoin = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(filterCoin.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(filterCoin.toLowerCase())
    );
  });

  return (
    <div className=" min-h-dvh m-6">
      <h1 className="text-[2rem] mb-[2rem]">🚀Crypto Dash</h1>
      {loading && (
        <p className="font-bold text-2xl text-blue-400">Loading....</p>
      )}
      {error && <p className="font-bold text-2xl text-blue-400">{error}</p>}
      {!loading && !error && coins.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <FilterCoin filterCoin={filterCoin} handleFilter={handleFilter} />
            <CountPage page={page} handlePage={handlePage} />
            <SortCoin sortBy={sortBy} onSortChange={handleSort} />
          </div>
          <CoinList filteredCoins={filteredCoin} />
        </div>
      )}
    </div>
  );
};

export default App;
