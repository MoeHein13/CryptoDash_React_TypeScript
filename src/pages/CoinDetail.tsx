import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import LoadingBar from "./LoadingBar";
import CoinChart from "../Components/CoinChart";

type CoinDetailProp = {
  id: string;
  symbol: string;
  name: string;
  description: {
    en: string;
    de: string;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
  };
  image: {
    large: string;
    thumb: string;
    small: string;
  };
  categories: string[];
  market_cap_rank: number;
  market_data: {
    current_price: {
      usd: number;
      [key: string]: number;
    };
    market_cap: {
      usd: number;
      [key: string]: number;
    };
    high_24h: {
      usd: number;
      [key: string]: number;
    };
    low_24h: {
      usd: number;
      [key: string]: number;
    };
    ath: {
      usd: number;
      [key: string]: number;
    };
    ath_date: {
      usd: string;
      [key: string]: string;
    };
    atl: {
      usd: number;
      [key: string]: number;
    };
    atl_date: {
      usd: string;
      [key: string]: string;
    };

    price_change_24h: number;
    price_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    last_updated: string;
  };
  last_updated: string;
};
const API_URL = import.meta.env.VITE_COIN_API_URL;
const CoinDetail = () => {
  const { id } = useParams();

  const [coinDetail, setCoinDetail] = useState<CoinDetailProp | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setCoinDetail(response.data);
        console.log(response.data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Fetch Data Error Occur"
        );
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  const renderCoinDetails = (
    <div className="flex flex-col justify-center items-center min-h-full">
      <img
        className="w-[100px] mb-5"
        src={coinDetail?.image.large}
        alt={coinDetail?.name}
      />
      <p className=" text-md mb-5 ">
        {coinDetail?.description.en.split(". ")[0] + "."}
      </p>
      <div>
        <h3 className="font-bold text-2xl mb-4">
          Rank : # {coinDetail?.market_cap_rank}
        </h3>
        <h3 className="font-bold text-2xl mb-4">
          Current Price : $
          {coinDetail?.market_data.current_price.usd.toLocaleString()}
        </h3>
        <h4 className="font-bold text-xl mb-4">
          Market Cap : $
          {coinDetail?.market_data.market_cap.usd.toLocaleString()}
        </h4>
        <h4 className="font-bold text-xl mb-4">
          24h High : ${coinDetail?.market_data.high_24h.usd.toLocaleString()}
        </h4>
        <h4 className="font-bold text-xl mb-4">
          24h Low : ${coinDetail?.market_data.low_24h.usd.toLocaleString()}
        </h4>
        <h4 className="font-bold text-xl mb-4">
          24h Price Change : $
          {coinDetail?.market_data.price_change_24h.toFixed(2)}
          {""} ({coinDetail?.market_data.price_change_percentage_24h.toFixed(2)}{" "}
          %)
        </h4>
        <h4 className="font-bold text-xl mb-4">
          Circulating Supply :{" "}
          {coinDetail?.market_data.circulating_supply.toLocaleString()}
        </h4>
        <h4 className="font-bold text-xl mb-4">
          Total Supply :{" "}
          {coinDetail?.market_data.total_supply?.toLocaleString() || "N/A"}
        </h4>
        <h4 className="font-bold text-xl mb-4">
          Max Supply :{" "}
          {coinDetail?.market_data.max_supply?.toLocaleString() || "N/A"}
        </h4>
        <h4 className="font-bold text-xl mb-4">
          All-Time High : $ {coinDetail?.market_data.ath.usd.toLocaleString()}{" "}
          on{" "}
          {coinDetail?.market_data.ath_date?.usd
            ? new Date(coinDetail.market_data.ath_date.usd).toLocaleDateString()
            : "N/A"}
        </h4>
        <h4 className="font-bold text-xl mb-4">
          All-Time Low : $ {coinDetail?.market_data.atl.usd.toLocaleString()} on{" "}
          {coinDetail?.market_data.atl_date?.usd
            ? new Date(coinDetail.market_data.atl_date.usd).toLocaleDateString()
            : "N/A"}
        </h4>
        <h4 className="font-bold text-xl mb-4">
          Last Updated :{" "}
          {coinDetail?.last_updated
            ? new Date(coinDetail.last_updated).toLocaleDateString()
            : "N/A"}
        </h4>
        <CoinChart coinId={coinDetail?.id} />
        <p className="font-semibold text-xl mb-3">
          🌐{" "}
          <a
            href={coinDetail?.links.homepage[0]}
            className="hover:underline text-blue-400 "
            target="_blank"
          >
            Website
          </a>
        </p>
        <p className="font-semibold text-xl mb-3">
          🧩{" "}
          <a
            href={coinDetail?.links.blockchain_site[0]}
            className="hover:underline text-blue-400 "
            target="_blank"
          >
            Blockchain Explorer
          </a>
        </p>
        {coinDetail?.categories && coinDetail.categories.length > 0 && (
          <p>{coinDetail?.categories.join(", ")}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-[700px] bg-gray-200 text-gray-800 font-semibold rounded-[8px] shadow-md text-center mx-auto overflow-hidden p-3 ">
      <Link
        to="/"
        className="text-blue-400 block hover:text-blue-600 font-bold mb-4"
      >
        ← Go back to Home Page
      </Link>
      <h1 className="text-4xl mb-2.5">
        {coinDetail ? `${coinDetail.name} (${coinDetail.symbol})` : ""}
      </h1>
      {loading && <LoadingBar />}
      {error && <p>{error}</p>}
      {!loading && !error && renderCoinDetails}
      {!loading && !error && !coinDetail && <p>No Coin Detail Found</p>}
    </div>
  );
};

export default CoinDetail;
