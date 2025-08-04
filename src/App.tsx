import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import CoinList from "./Components/CoinList";
import CountPage from "./Components/CountPage";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const [page, setPage] = useState(10);

  const handlePage = (e: ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(e.target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`
        );
        const data = response.data;
        console.log(data);
        setCoins(data);
      } catch (er: unknown) {
        setError(er instanceof Error ? er.message : "Failed to fetch Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className=" min-h-dvh m-6">
      <h1 className="text-[2rem] mb-[2rem]">🚀Crypto Dash</h1>
      {loading && (
        <p className="font-bold text-2xl text-blue-400">Loading....</p>
      )}
      {error && <p className="font-bold text-2xl text-blue-400">{error}</p>}
      {!loading && !error && coins.length > 0 && (
        <div>
          <CountPage page={page} handlePage={handlePage} />
          <CoinList coins={coins} />
        </div>
      )}
    </div>
  );
};

export default App;
