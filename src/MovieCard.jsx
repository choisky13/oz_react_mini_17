import { useNavigate } from "react-router-dom";

function MovieCard({ id, title, posterPath, voteAverage }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/details/${id}`)}>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <p>평점: {voteAverage}</p>
    </div>
  );
}

export default MovieCard;
