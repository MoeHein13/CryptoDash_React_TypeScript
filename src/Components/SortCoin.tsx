import type { ChangeEvent } from "react";

type sortProp = {
  sortBy: string;
  onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SortCoin = ({ sortBy, onSortChange }: sortProp) => {
  const options = [
    {
      id: 1,
      value: "market_cap_desc",
      description: "Market Cap (High To Low)",
    },
    {
      id: 2,
      value: "market_cap_asc",
      description: "Market Cap (Low To High)",
    },
    {
      id: 3,
      value: "price_desc",
      description: "Price(High To Low)",
    },
    {
      id: 4,
      value: "price_asc",
      description: "Price(Low To High)",
    },
    {
      id: 5,
      value: "priceChange_desc",
      description: "24h Change (High To Low)",
    },
    {
      id: 6,
      value: "priceChange_asc",
      description: "24h Change (Low To High)",
    },
  ];

  const renderOptions = options.map((option) => {
    return (
      <option key={option.id} value={option.value}>
        {option.description}
      </option>
    );
  });

  return (
    <div className=" flex items-center shrink-0">
      <label htmlFor="sortby" className="font-bold">
        Sort By :
      </label>
      <select
        id="sortby"
        value={sortBy}
        onChange={onSortChange}
        className="rounded-xl shadow-xl bg-[#1c1f26] outline-none px-4 py-2 mx-4 "
      >
        {renderOptions}
      </select>
    </div>
  );
};

export default SortCoin;
