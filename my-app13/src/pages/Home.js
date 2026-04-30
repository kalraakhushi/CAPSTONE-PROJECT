import React, { useState } from "react";
import { fetchTrending } from "../services/tmdbApi";
import { useApiFetch } from "../hooks/useApiFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import MovieCard from "../components/MovieCard";
import Toast from "../components/Toast";

/**
 * Home page displays a welcome section and trending movies/TV.
 */
export default function Home() {
  const { data, loading, error } = useApiFetch(() => fetchTrending("all", "week"), [fetchTrending]);
  const [toast, setToast] = useState({ visible: false, message: "" });

  return (
    <div>
      <Toast visible={toast.visible} message={toast.message} onClose={() => setToast({ visible: false })} />
      <section className="mb-8">
        <div className="rounded p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
          <h1 className="text-3xl md:text-5xl font-bold">Welcome to MovieTracker</h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            Search movies & TV shows, view details, and save to your personal watchlist.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4">Trending This Week</h2>
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error.message || "Could not load trending"} />}
        {data && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data.results.map((item) => (
              <MovieCard key={`${item.media_type}-${item.id}`} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
