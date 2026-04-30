import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Controlled search component used in header.
 * On submit navigates to /movies or performs search inline (we will navigate to /movies with query param)
 */
export default function SearchBar({ initial = "" }) {
  const [q, setQ] = useState(initial);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!q.trim()) {
      // we could show a toast; for simplicity use alert here or integrate toast
      alert("Please enter a search query.");
      return;
    }
    navigate(`/movies?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center">
      <label htmlFor="search" className="sr-only">Search movies or TV shows</label>
      <input
        id="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full rounded-l px-3 py-2 text-gray-900"
        placeholder="Search movies & TV..."
        aria-label="Search"
      />
      <button
        type="submit"
        className="px-3 py-2 bg-accent rounded-r text-white font-medium"
        aria-label="Search submit"
      >
        Search
      </button>
    </form>
  );
}
