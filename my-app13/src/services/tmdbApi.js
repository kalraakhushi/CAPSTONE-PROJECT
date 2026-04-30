// src/services/tmdbApi.js
// ----------------------------------------------------------
// This file handles all API requests to The Movie Database (TMDB).
// It provides functions to fetch movies, TV shows, and search results.
// ----------------------------------------------------------

// ✅ Your TMDB API Key (you can later move this to .env if needed)
const API_KEY = 'a5dbafb5ae63f7cb48cb837e281afcc8';

// ✅ Base URL for all TMDB API requests
const BASE_URL = 'https://api.themoviedb.org/3';

// ✅ Helper function for making API requests
// This function handles response errors and returns JSON data
const fetchFromTMDB = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from TMDB');
    }
    return await response.json();
  } catch (error) {
    console.error('TMDB API Error:', error);
    throw error;
  }
};

// ----------------------------------------------------------
// 🎬 MOVIES
// ----------------------------------------------------------

// Fetch popular movies
export const fetchPopularMovies = async () => {
  return await fetchFromTMDB('/movie/popular');
};

// Fetch top-rated movies
export const fetchTopRatedMovies = async () => {
  return await fetchFromTMDB('/movie/top_rated');
};

// Fetch upcoming movies
export const fetchUpcomingMovies = async () => {
  return await fetchFromTMDB('/movie/upcoming');
};

// Fetch details for a specific movie by ID
export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    return await response.json();
  } catch (error) {
    console.error('Movie Details Error:', error);
    throw error;
  }
};

// ----------------------------------------------------------
// 📺 TV SHOWS
// ----------------------------------------------------------

// Fetch popular TV shows
export const fetchPopularTVShows = async () => {
  return await fetchFromTMDB('/tv/popular');
};

// Fetch top-rated TV shows
export const fetchTopRatedTVShows = async () => {
  return await fetchFromTMDB('/tv/top_rated');
};

// Fetch currently airing TV shows
export const fetchAiringTodayTVShows = async () => {
  return await fetchFromTMDB('/tv/airing_today');
};

// Fetch details for a specific TV show by ID
export const fetchTVShowDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`);
    if (!response.ok) {
      throw new Error('Failed to fetch TV show details');
    }
    return await response.json();
  } catch (error) {
    console.error('TV Show Details Error:', error);
    throw error;
  }
};

// ----------------------------------------------------------
// 🔍 SEARCH
// ----------------------------------------------------------

// Search for movies by keyword
export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Movie search failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Search Movies Error:', error);
    throw error;
  }
};

// Search for TV shows by keyword
export const searchTVShows = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('TV show search failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Search TV Shows Error:', error);
    throw error;
  }
};

// ----------------------------------------------------------
// 🖼️ IMAGE URL HELPER
// ----------------------------------------------------------

// TMDB gives only image paths — this helper builds full URLs
export const getImageUrl = (path, size = 'w500') => {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : '/placeholder.svg';
};

// ----------------------------------------------------------
// ✅ Example Usage in a Component:
// ----------------------------------------------------------
//
// import { useEffect, useState } from 'react';
// import { fetchPopularMovies } from '../services/tmdbApi';
//
// const ExampleComponent = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     const loadMovies = async () => {
//       try {
//         const data = await fetchPopularMovies();
//         setMovies(data.results);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadMovies();
//   }, []);
//
//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         movies.map((movie) => <div key={movie.id}>{movie.title}</div>)
//       )}
//     </div>
//   );
// };
//
// ----------------------------------------------------------
