import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import CoinList from "./Components/CoinList";
import CountPage from "./Components/CountPage";
import FilterCoin from "./Components/FilterCoin";
import useFetchData from "./Hooks/FetchData";

const App = () => {
  const { coins, loading, page, error, setPage } = useFetchData();

  const [filterCoin, setFilterCoin] = useState<string>("");

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterCoin(e.target.value);
    console.log(filterCoin);
  };

  const handlePage = (e: ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(e.target.value));
  };

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
          </div>
          <CoinList coins={coins} />
        </div>
      )}
    </div>
  );
};

export default App;
