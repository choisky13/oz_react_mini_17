import { useState } from "react";
import detailData from "../data/movieDetailData.json";

function MovieDetail() {
  const [movie, setMovie] = useState(detailData);

  const imageUrl =
    "https://image.tmdb.org/t/p/w500" +
    (movie.backdrop_path || movie.poster_path);

  return (
    <div className="detail-container">
      <div className="detail-poster">
        <img src={imageUrl} alt={movie.title} />
      </div>

      <div className="detail-info">
        <div className="info-top">
          <div className="detail-title">{movie.title}</div>
          <div className="detail-rating">평점 : {movie.vote_average}</div>
        </div>

        <div className="detail-genres">
          장르:{" "}
          {movie.genres
            ? movie.genres.map((g) => g.name || g).join(", ")
            : "정보 없음"}
        </div>

        <div className="detail-overview">{movie.overview}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
