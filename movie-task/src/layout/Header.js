import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex p-5 justify-between items-center">
      <Link to="/">
        <img
          className="h-20"
          src="https://www.topfiyt.com/template/assets/images/logo.png"
        />
      </Link>
      <nav className="flex gap-10 justify-start items-start text-gray-600 font-bold">
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/fav-movies">Favorite Movies</NavLink>
      </nav>
    </header>
  );
}
