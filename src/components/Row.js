import { useState, useEffect } from "react";
import "./Row.css";
import { movieData } from "../movieData";

const getMoviesByCategory = (title) => {
  const categoryMap = {
    "NETFLIX ORIGINALS": movieData.netflixOriginals,
    "Trending Now": movieData.trending,
    "Top Rated": movieData.topRated,
    "Action Movies": movieData.action,
    "Comedy Movies": movieData.comedy,
    "Horror Movies": movieData.horror,
    "Romance Movies": movieData.romance,
    "Documentaries": movieData.documentaries,
  };
  return categoryMap[title] || [];
};

function Row({ title, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieList = getMoviesByCategory(title);
    setMovies(movieList);
  }, [title]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
