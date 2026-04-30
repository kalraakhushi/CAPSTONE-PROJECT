import React from "react";
import useWatchlist from "../hooks/useWatchlist";
import { Link } from "react-router-dom";
import { getImageUrl } from "../services/tmdbApi";

/**
 * Watchlist page shows saved items (movies & tv)
 */
export default function WatchlistPage() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div>
      <h1 className="text-2xl mb-4">Your Watchlist</h1>
      {watchlist.length === 0 ? (
        <div className="p-6 bg-gray-800 rounded text-gray-300">
          Your watchlist is empty. Browse <Link to="/movies" className="text-white underline">movies</Link> or <Link to="/tv-shows" className="text-white underline">TV shows</Link> to add.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {watchlist.map((item) => (
            <div key={`${item.type}-${item.id}`} className="bg-gray-800 rounded overflow-hidden">
              <Link to={item.type === "tv" ? `/tv/${item.id}` : `/movie/${item.id}`}>
                <img src={getImageUrl(item.poster_path)} alt={item.title} className="w-full h-64 object-cover" />
              </Link>
              <div className="p-3">
                <div className="font-semibold">{item.title}</div>
                <div className="mt-2 flex justify-between">
                  <Link to={item.type === "tv" ? `/tv/${item.id}` : `/movie/${item.id}`} className="text-sm underline">
                    View
                  </Link>
                  <button
                    onClick={() => removeFromWatchlist(item.id, item.type)}
                    className="text-sm px-2 py-1 bg-red-600 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
