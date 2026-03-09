import { useNavigate } from "react-router-dom";

function MovieCard({ title, posterPath, voteAverage }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + posterPath;
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate("/details")}
      style={{ cursor: "pointer" }}
    >
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>평점 : {voteAverage}</p>
    </div>
  );
}

export default MovieCard;
