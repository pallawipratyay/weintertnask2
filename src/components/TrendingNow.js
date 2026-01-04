import React from "react";
import "./TrendingNow.css";
import { movieData } from "../movieData";

function TrendingNow() {
  const trendingMovies = movieData.trending.slice(0, 6);

  return (
    <section className="trending-section">
      <div className="trending-container">
        <h2 className="trending-title">Trending Now</h2>
        <div className="trending-carousel">
          {trendingMovies.map((movie, index) => (
            <div key={movie.id} className="trending-item">
              <div className="trending-number">{index + 1}</div>
              <div className="trending-poster-wrapper">
                <img
                  src={movie.poster_path || "https://via.placeholder.com/300x450"}
                  alt={movie.title}
                  className="trending-poster"
                />
                <div className="netflix-logo-badge">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix"
                    className="netflix-logo-small"
                  />
                </div>
              </div>
              <p className="trending-movie-title">{movie.title.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingNow;

