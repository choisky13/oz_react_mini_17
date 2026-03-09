import React, { useState } from "react";
import MovieCard from "./MovieCard";
import dummyDate from "../data/movieListData.json";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(dummyDate.results);

  return (
    <div>
      <h2> 영화 리스트 </h2>
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
