import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Movie & TV Show Tracker — Built with React & TMDB
      </div>
    </footer>
  );
}
