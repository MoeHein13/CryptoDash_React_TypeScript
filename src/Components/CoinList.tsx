import Coin from "./Coin";
import { type Coins } from "../App";

type CoinsProps = {
  filteredCoins: Coins[];
};

const CoinList = ({ filteredCoins }: CoinsProps) => {
  const renderCoin = filteredCoins.map((coin) => {
    return <Coin key={coin.id} coin={coin} />;
  });
  return (
    <main className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6 ">
      {renderCoin}
    </main>
  );
};

export default CoinList;
