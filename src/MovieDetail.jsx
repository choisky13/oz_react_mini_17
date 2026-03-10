import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
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
        setMovie(data);
      } catch (error) {
        console.error("에러:", error);
      }
    };

    fetchDetail();
  }, [id]);

  if (!movie)
    return (
      <div className="text-center mt-20">영화 정보를 불러오는 중입니다...</div>
    );

  return (
    <div className="min-h-[calc(100vh-70px)] bg-white flex justify-center items-center py-12 px-5">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="flex-[1.2]">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover block"
          />
        </div>

        <div className="flex-1 p-10 flex flex-col justify-center text-[#222]">
          <h1 className="text-3xl font-extrabold mb-2">{movie.title}</h1>
          <p className="text-base font-bold mb-8 text-[#333]">
            평점: {movie.vote_average}
          </p>

          <h3 className="text-lg font-bold mb-3 text-[#111]">장르:</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-[#f1f1f3] text-[#444] px-4 py-1.5 rounded-full text-sm font-semibold border border-[#e0e0e0]"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3 text-[#111]">줄거리:</h3>
          <p className="text-[15px] leading-relaxed text-[#555] m-0">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
