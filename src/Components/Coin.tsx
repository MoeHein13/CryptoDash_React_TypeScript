import { type Coins } from "../App";

type coinProp = {
  coin: Coins;
};

const Coin = ({ coin }: coinProp) => {
  return (
    <div>
      <div className="bg-[#161b22] p-5 rounded-xl shadow-xl   transition-transform duration-200 ease-in-out hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
          <img src={coin.image} alt={coin.name} className="w-10 h-10" />
          <div>
            <h2>{coin.name}</h2>
            <p>{coin.symbol}</p>
          </div>
        </div>
        <p>Price : ${coin.current_price.toLocaleString()}</p>
        <p
          className={` 
        
            ${
              coin.market_cap_change_percentage_24h < 0
                ? "text-red-400"
                : "text-green-400"
            }`}
        >
          24h Change: {coin.market_cap_change_percentage_24h} %
        </p>
        <p> Market Cap : {coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;
