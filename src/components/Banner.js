import { useState, useEffect } from "react";
import "./Banner.css";
import { movieData } from "../movieData";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Pick a random Netflix Original for the banner
    const netflixOriginals = movieData.netflixOriginals;
    const randomMovie = netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)];
    setMovie(randomMovie);
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
