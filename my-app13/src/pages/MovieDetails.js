import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, getImageUrl } from "../services/tmdbApi";
import { useApiFetch } from "../hooks/useApiFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import useWatchlist from "../hooks/useWatchlist";
import Toast from "../components/Toast";

export default function MovieDetails() {
  const { id } = useParams();
  const { data, loading, error } = useApiFetch(() => fetchMovieDetails(id), [id]);
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const [toast, setToast] = useState({ visible: false, message: "" });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message || "Failed to load movie."} />;

  const movie = data;
  if (!movie) return null;

  const handleAdd = () => {
    addToWatchlist({ id: movie.id, title: movie.title, poster_path: movie.poster_path, type: "movie" });
    setToast({ visible: true, message: "Movie added to watchlist!" });
  };

  const handleRemove = () => {
    removeFromWatchlist(movie.id, "movie");
    setToast({ visible: true, message: "Removed from watchlist!" });
  };

  return (
    <div className="space-y-6">
      <Toast visible={toast.visible} message={toast.message} onClose={() => setToast({ visible: false })} />
      <div className="flex flex-col md:flex-row gap-6">
        <img src={getImageUrl(movie.poster_path, "w500")} alt={movie.title} className="w-full md:w-1/3 rounded" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-300 mt-2">{movie.tagline}</p>
          <div className="mt-3 text-sm text-gray-400">
            <div>Release: {movie.release_date}</div>
            <div>Rating: {movie.vote_average}</div>
            <div>Genres: {movie.genres?.map((g) => g.name).join(", ")}</div>
          </div>

          <div className="mt-4">
            {isInWatchlist(movie.id, "movie") ? (
              <button onClick={handleRemove} className="px-4 py-2 bg-red-600 rounded">Remove from Watchlist</button>
            ) : (
              <button onClick={handleAdd} className="px-4 py-2 bg-accent rounded">Add to Watchlist</button>
            )}
          </div>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-gray-300">{movie.overview}</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Cast</h2>
            <div className="flex gap-3 overflow-x-auto mt-3">
              {movie.credits?.cast?.slice(0, 10).map((c) => (
                <div key={c.cast_id} className="min-w-[120px]">
                  <img src={getImageUrl(c.profile_path, "w200")} alt={c.name} className="rounded w-full h-36 object-cover" />
                  <div className="text-sm mt-1">{c.name}</div>
                  <div className="text-xs text-gray-400">{c.character}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
