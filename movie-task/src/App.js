import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularMovies,
  getLatestMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "./store/actions/movieActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getLatestMovies());
    dispatch(getTopRatedMovies());
    dispatch(getUpComingMovies());
  }, []);

  return (
    <div className="App bg-gray-800">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
