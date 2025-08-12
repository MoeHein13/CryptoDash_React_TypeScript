import { type ChangeEvent } from "react";

type FilterProp = {
  filterCoin: string;
  handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FilterCoin = ({ filterCoin, handleFilter }: FilterProp) => {
  return (
    <div className="flex-1 ">
      <input
        type="text"
        value={filterCoin}
        onChange={handleFilter}
        className="border p-3 w-full rounded-xl  "
        placeholder="Filter coins by name or symbol"
      />
    </div>
  );
};

export default FilterCoin;
