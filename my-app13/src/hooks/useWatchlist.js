import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

/**
 * Tiny custom hook wrapper that exposes watchlist context API.
 */
export default function useWatchlist() {
  return useContext(WatchlistContext);
}
