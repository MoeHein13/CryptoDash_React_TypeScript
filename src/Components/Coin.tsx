import type { Coins } from "./CoinList";

type coinProp = {
  coin: Coins;
};

const Coin = ({ coin }: coinProp) => {
  return (
    <div>
      <div className="bg-[#161b22] p-6 rounded-xl shadow-xl   transition-transform duration-200 ease-in-out hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
          <img src={coin.image} alt={coin.name} className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Coin;
