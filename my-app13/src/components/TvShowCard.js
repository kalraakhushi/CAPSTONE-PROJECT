import React from "react";
import MovieCard from "./MovieCard";

/**
 * TvShowCard can reuse MovieCard as display is similar; we set media_type to 'tv'
 */
export default function TvShowCard({ item }) {
  // ensure media_type for correct link
  const withType = { ...item, media_type: "tv" };
  return <MovieCard item={withType} />;
}
