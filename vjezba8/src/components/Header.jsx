import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-gray-700 mb-12 shadow-lg text-neutral-100">
        <div className="container py-2 mx-auto flex items-center">
          <div className="px-2 mx-2">
            <FaGithub className="inline pr-2 text-3xl" />
            <Link to="/" className="text-lg font-bold align-middle">
              Početna
            </Link>
          </div>
          <nav className="flex-1 px-2 mx-2">
            <div className="flex justify-end gap-2">
              <Link to="/">Početna</Link>
              <Link to="/about">About</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
