import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const safeMovies = data.results.filter(
          (movie) => movie.adult === false,
        );
        setMovies(safeMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/details/${movie.id}`)}
            className="bg-white rounded-[20px] overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="w-full aspect-[2/3] bg-gray-200">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex-grow">
              <h3 className="text-[16px] font-bold text-[#1d1d1f] mb-1.5 truncate">
                {movie.title}
              </h3>
              <p className="text-[14px] text-gray-400 m-0">
                평점: {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
