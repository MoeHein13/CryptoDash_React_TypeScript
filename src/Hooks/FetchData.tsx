import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const useFetchData = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const [page, setPage] = useState<number>(10);

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

  return { coins, loading, error, page, setPage };
};

export default useFetchData;
