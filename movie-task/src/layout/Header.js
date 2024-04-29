import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex p-2 justify-between items-center">
      <div>
        <Link
          to="/"
          className="no-underline flex justify-center items-center gap-3"
        >
          <img
            className="h-20"
            src="https://www.topfiyt.com/template/assets/images/logo.png"
          />
          <h2 className="text-3xl font-bold text-teal-400 no-underline">
            TopFiyt
          </h2>
        </Link>
      </div>
      <nav className="flex gap-10 justify-start items-start font-bold max-sm:hidden">
        <NavLink to="/" className="no-underline  text-gray-600">
          Home Page
        </NavLink>
        <NavLink to="/fav-movies" className="no-underline  text-gray-600">
          Favorite Movies
        </NavLink>
      </nav>
      <div className="hidden max-sm:flex gap-4">
        <FontAwesomeIcon icon={faHouse} size="lg" />
        <FontAwesomeIcon icon={faHeart} size="lg" />
      </div>
    </header>
  );
}
