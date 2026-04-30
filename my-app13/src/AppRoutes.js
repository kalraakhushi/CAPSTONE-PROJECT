import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";
import WatchlistPage from "./pages/WatchlistPage";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

/**
 * Routes separated file for clarity.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-shows" element={<TvShows />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/tv/:id" element={<TvDetails />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/watchlist"
        element={
          <ProtectedRoute>
            <WatchlistPage />
          </ProtectedRoute>
        }
      />
      {/* fallback route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
