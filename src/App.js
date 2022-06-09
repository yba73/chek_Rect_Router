import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Filter from "./Comp/Filter";

import MovieList from "./Comp/MovieList";

function App() {
  const [rate, setRate] = useState(0);
  const [searching, setSearching] = useState("");

  const getRate = (rating) => {
    setRate(rating);
  };

  const getSearch = (searching) => {
    setSearching(searching);
  };
  return (
    <>
      <div>
        <div className="header">
          <Filter getRate={getRate} getSearch={getSearch} />
        </div>
        <div className="container"></div>

        <MovieList searching={searching} rate={rate} />
      </div>
    </>
  );
}

export default App;
