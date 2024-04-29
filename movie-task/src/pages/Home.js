import Slider from "../components/home/Slider";
import { data } from "../data";

export default function Home() {
  const movies = data.results;

  return (
    <>
      <Slider />
    </>
  );
}
