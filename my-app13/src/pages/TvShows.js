import React from "react";
import { fetchPopularTv } from "../services/tmdbApi";
import { useApiFetch } from "../hooks/useApiFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import TvShowCard from "../components/TvShowCard";

export default function TvShows() {
  const { data, loading, error } = useApiFetch(() => fetchPopularTv(), []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Popular TV Shows</h1>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error.message || "Failed to load TV shows."} />}

      {data && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.results.map((item) => (
            <TvShowCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
