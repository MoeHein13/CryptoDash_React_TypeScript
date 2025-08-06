import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-end items-center gap-4 m-4">
      <Link
        className="text-blue-400 font-semibold transition-colors ease-in-out duration-200"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-blue-400 font-semibold transition-colors ease-in-out duration-200"
        to="/about"
      >
        About
      </Link>
    </div>
  );
};

export default Header;
