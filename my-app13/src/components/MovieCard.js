import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../services/tmdbApi";

/**
 * MovieCard optimized with React.memo to avoid unnecessary re-renders.
 * Props: item: { id, title/name, poster_path, release_date, vote_average, media_type(optional) }
 */
function MovieCardInner({ item }) {
  const title = item.title || item.name;
  const year = (item.release_date || item.first_air_date || "").slice(0, 4);
  return (
    <Link to={item.media_type === "tv" ? `/tv/${item.id}` : `/movie/${item.id}`}>
      <div className="bg-gray-800 rounded overflow-hidden hover:scale-105 transform transition shadow-md">
        <img
          alt={title}
          src={getImageUrl(item.poster_path)}
          className="w-full h-64 object-cover"
        />
        <div className="p-2">
          <div className="font-semibold truncate">{title}</div>
          <div className="text-sm text-gray-400 flex justify-between">
            <span>{year}</span>
            <span>⭐ {item.vote_average?.toFixed(1) || "N/A"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(MovieCardInner);
