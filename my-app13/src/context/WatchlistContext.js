import React, { createContext, useEffect, useState } from "react";

export const WatchlistContext = createContext();

/**
 * Watchlist provider. Persists to localStorage.
 * Exposes add/remove/check operations and the list.
 */
export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const v = localStorage.getItem("watchlist_v1");
      return v ? JSON.parse(v) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("watchlist_v1", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (item) => {
    setWatchlist((prev) => {
      if (prev.find((p) => p.id === item.id && p.type === item.type)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWatchlist = (id, type) => {
    setWatchlist((prev) => prev.filter((p) => !(p.id === id && p.type === type)));
  };

  const isInWatchlist = (id, type) => watchlist.some((p) => p.id === id && p.type === type);

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
