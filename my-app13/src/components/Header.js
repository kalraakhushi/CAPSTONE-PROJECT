import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AuthContext } from "../context/AuthContext";

/**
 * App header with nav links and responsive layout
 */
export default function Header() {
  const { user, logout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-white">
            MovieTracker
          </Link>
          <nav className="hidden md:flex space-x-3">
            <Link to="/movies" className="hover:underline">
              Movies
            </Link>
            <Link to="/tv-shows" className="hover:underline">
              TV Shows
            </Link>
            <Link to="/watchlist" className="hover:underline">
              Watchlist
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:block w-72">
            <SearchBar />
          </div>

          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm">Hi, {user.username}</span>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="px-3 py-1 bg-red-600 rounded text-white text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="px-3 py-1 bg-accent rounded text-white text-sm">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile search */}
      <div className="md:hidden container mx-auto px-4 py-2">
        <SearchBar />
      </div>
    </header>
  );
}
