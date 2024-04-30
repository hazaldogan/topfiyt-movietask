import FavoriteMovies from "../pages/FavoriteMovies";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:id">
          <Movie />
        </Route>
        <Route exact path="/fav-movies">
          <FavoriteMovies />
        </Route>
      </Switch>
    </div>
  );
}
