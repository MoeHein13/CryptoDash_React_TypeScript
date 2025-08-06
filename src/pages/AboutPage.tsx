const AboutPage = () => {
  return (
    <div className="flex justify-center items-center min-h-dvh overflow-y-auto">
      <div className="w-[600px] mx-auto p-8 shadow-xl rounded-xl bg-[#161b22]">
        <h1 className="mb-4 text-2xl font-bold text-center">
          About Crypto Dash
        </h1>
        <p className="mb-4 leading-[1.6]">
          Crypto Dash is a simple React application that displays live
          cryptocurrency data using the CoinGecko API.
        </p>
        <p className="mb-4 leading-[1.6]">
          You can explore the top cryptocurrencies by market cap, filter by name
          or symbol, and sort them by price, market cap, or 24-hour change.
        </p>
        <p className="mb-4 leading-[1.6]">
          This project is built as part of a React tutorial to help you
          understand hooks, components, state management, and integrating with
          external APIs.
        </p>
        <p className="mb-4 leading-[1.6]">
          🚀 Future features might include detailed coin views, favorites,
          pagination, and much more!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
