import type { ChangeEvent } from "react";

type Countprop = {
  page: number;
  handlePage: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const CountPage = ({ page, handlePage }: Countprop) => {
  const options = [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 5,
    },
    {
      id: 3,
      value: 10,
    },
    {
      id: 6,
      value: 25,
    },
    {
      id: 4,
      value: 50,
    },
    {
      id: 5,
      value: 100,
    },
  ];

  const renderLimit = options.map((opt) => {
    return (
      <option key={opt.id} value={opt.value}>
        {opt.value}
      </option>
    );
  });

  return (
    <div className=" flex justify-end items-center shrink-0">
      <label className="font-bold" htmlFor="countpage">
        Show:
      </label>
      <select
        className="rounded-xl shadow-xl px-4 py-2 bg-[#1c1f26] text-white mx-4 outline-0"
        value={page}
        id="countpage"
        onChange={handlePage}
      >
        {renderLimit}
      </select>
    </div>
  );
};

export default CountPage;
