import LatestMovies from "../components/home/LatestMovie";
import PopularMovies from "../components/home/PopularMovies";
import Slider from "../components/home/Slider";
import TopRatedMovies from "../components/home/TopRatedMovies";

export default function Home() {
  return (
    <>
      <Slider />
      <PopularMovies />
      <TopRatedMovies />
      <LatestMovies />
    </>
  );
}
