import Coin from "./Coin";

export type Coins = {
  id: string;
  image: string;
  name: string;
  symbol: string;
  [key: string]: unknown;
};

type Coinsprop = {
  coins: Coins[];
};

const CoinList = ({ coins }: Coinsprop) => {
  const renderCoin = coins.map((coin) => {
    return <Coin key={coin.id} coin={coin} />;
  });
  return (
    <main className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6 ">
      {renderCoin}
    </main>
  );
};

export default CoinList;
