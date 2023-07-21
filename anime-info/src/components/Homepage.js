import React, { useState } from "react";
import { AnimeContext } from "../context/global";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Airing from "./Airing";

const Homepage = () => {
  const {
    handleSubmit,
    search,
    searchAnime,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
    getPopularAnime,
  } = AnimeContext();

  const [getPopular, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (getPopular) {
      case "popular":
        return <Popular getPopular={getPopular} />;
      case "airing":
        return <Airing getPopular={getPopular} />;
      case "upcoming":
        return <Upcoming getPopular={getPopular} />;
      default:
        return <Popular getPopular={getPopular} />;
    }
  };
  return (
    <div className="homepage">
      <header>
        <div className="logo">
          <h1>
            {getPopular === "popular"
              ? "Popular Anime"
              : getPopular === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
        <div className="search-container">
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              Popular<i className="fas fa-fire"></i>
            </button>
          </div>
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </button>
          </div>
          <div className="filter-btn upcoming-filter">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming
            </button>
          </div>
        </div>
      </header>
      {switchComponent()}
    </div>
  );
};

export default Homepage;
