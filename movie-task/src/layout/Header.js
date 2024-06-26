import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  const history = useHistory();
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
        <NavLink to="/" className="no-underline text-white">
          Home Page
        </NavLink>
        <NavLink to="/fav-movies" className="no-underline text-white">
          Favorite Movies
        </NavLink>
      </nav>
      <div className="hidden max-sm:flex gap-4">
        <FontAwesomeIcon
          icon={faHouse}
          onClick={() => history.push("/")}
          className="text-white"
          size="lg"
        />
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => history.push("/fav-movies")}
          size="lg"
          className="text-white"
        />
      </div>
    </header>
  );
}
