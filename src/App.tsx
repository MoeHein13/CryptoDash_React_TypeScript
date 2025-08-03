import { useEffect, useState } from "react";
import axios from "axios";
import CoinList from "./Components/CoinList";
const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const fetchdata = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      console.log(data);
      setCoins(data);
    } catch (er: unknown) {
      setError(er instanceof Error ? er.message : "Failed to fetch Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className=" min-h-dvh m-6">
      <h1 className="text-[2rem] mb-[2rem]">🚀Crypto Dash</h1>
      {loading && (
        <p className="font-bold text-2xl text-blue-400">Loading....</p>
      )}
      {error && <p className="font-bold text-2xl text-blue-400">{error}</p>}
      {!loading && !error && coins.length > 0 && <CoinList coins={coins} />}
    </div>
  );
};

export default App;
