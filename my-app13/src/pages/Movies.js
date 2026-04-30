import React from "react";
import { fetchPopularMovies, searchMulti } from "../services/tmdbApi";
import { useSearchParams } from "react-router-dom";
import { useApiFetch } from "../hooks/useApiFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import MovieCard from "../components/MovieCard";

/**
 * Movies page - reads query param q for search. If q present, perform search, else show popular movies.
 */
export default function Movies() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";

  const apiFn = React.useCallback(
    () => (q ? searchMulti(q) : fetchPopularMovies()),
    [q]
  );

  const { data, loading, error } = useApiFetch(apiFn, [q]);

  return (
    <div>
      <h1 className="text-2xl mb-4">{q ? `Search results for "${q}"` : "Popular Movies"}</h1>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error.message || "Failed to load movies."} />}

      {data && data.results?.length === 0 && <p>No results found.</p>}

      {data && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.results
            .filter((r) => r.media_type ? r.media_type === "movie" || !q : true)
            .map((item) => (
              // ensure media_type is movie for links
              <MovieCard key={item.id} item={{ ...item, media_type: item.media_type || "movie" }} />
            ))}
        </div>
      )}
    </div>
  );
}
