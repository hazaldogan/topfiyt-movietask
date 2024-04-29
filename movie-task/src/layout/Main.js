import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
