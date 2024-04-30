import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "./store/actions/movieActions";
import { getLatestMovies } from "./store/actions/movieActions";
import { getTopRatedMovies } from "./store/actions/movieActions";
import { getUpComingMovies } from "./store/actions/movieActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getLatestMovies());
    dispatch(getTopRatedMovies());
    dispatch(getUpComingMovies());
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
